import styled from "styled-components"
import Filter from "../../ui/Filter"
import Table from "../../ui/Table"
import useProductList from "../product/useProductList"
import { useSearchParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"
import Pagination from "../../ui/Pagination"
import { PAGE_LIMIT } from "../../utilities/constants"
import ProductRow from "./ProductRow"
import ProductForm from "./ProductForm"
import { useState } from "react"

const StyledProductPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`

const StyledAddProduct = styled.button`
  width: fit-content;
  padding: 6px 20px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);
  text-align: center;
  font-size: 1.4rem;
  cursor: pointer;
`

function ProductPanel() {
  const {isLoading, products, count} = useProductList();
  const [searchParams, ] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const [isAdding, setIsAdding] = useState(false);

  function handleStartAdding() {
    setIsAdding(true);
  }
  
  function handleEndAdding() {
    setIsAdding(false);
  }

  if (isLoading || !products) return <Spinner />

  return (
    <StyledProductPanel>
      <Filter />

      <Table
        columns="4rem 12rem 20rem 12rem 12rem 16rem 16rem"
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
            onClick={handleStartAdding}
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
      {isAdding &&
        <ProductForm 
          close={handleEndAdding}
          isOpen={isAdding}
        />
      }
    </StyledProductPanel>
  )
}

export default ProductPanel