import styled from "styled-components"
import Filter from "../../ui/Filter"
import Table from "../../ui/Table"
import useProductList from "../product/useProductList"
import { useSearchParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import Pagination from "../../ui/Pagination"
import { PAGE_LIMIT } from "../../utilities/constants"
import ProductRow from "../product/ProductRow"
import { useEffect } from "react"

const StyledProductPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const StyledAddProduct = styled.span`
  padding: 6px 12px;
  border-radius: 6px;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);
  text-align: center;
  font-size: 1.4rem;
`

function ProductPanel() {
  const {isLoading, products, count} = useProductList();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  if (isLoading || !products) return <Spinner />

  return (
    <StyledProductPanel>
      <Filter />

      <Table
        columns="0.6fr 1.8fr 3fr 1.2fr 1.2fr 2.4fr 1.2fr"
      >
        <Table.Header>
          <span>Id</span>
          <span>Title</span>
          <span>Description</span>
          <span>Category</span>
          <span>Price</span>
          <span>Images</span>
          <StyledAddProduct
            title="Add Product"
          >
            Add product
          </StyledAddProduct>
        </Table.Header>

        <Table.Body 
          data={products}
          render={(product) => (
            <ProductRow product={product} key={product.id} />
          )}
        />
      </Table>

      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination
          length={products.length}
          count={count}
        />
      )}
    </StyledProductPanel>
  )
}

export default ProductPanel