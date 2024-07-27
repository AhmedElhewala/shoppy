import styled from "styled-components";
import useProductList from "./useProductList";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import { PAGE_LIMIT } from "../../utilities/constants";
import EmptySection from "../../ui/EmptySection";
import Filter from "../../ui/Filter";
import ProductItemMini from "./ProductItemMini";

const StyledProductsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const StyledProductsList = styled.div`
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  position: relative;
`

function ProductList() {
  const {isLoading, products, count} = useProductList();
  const [searchParams, ] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  if (isLoading || !products) return <Spinner />

  return (
    <StyledProductsSectionContainer>
      <Filter />
      {products.length > 0 ?
        <StyledProductsList>
          {products.map(product => (
            <ProductItemMini 
              key={product.id}
              product={product}
            />
          ))}
        </StyledProductsList> :
        <EmptySection>
          There is no products with this filtration, you can try another filter
        </EmptySection>
      }
      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination
          length={products.length}
          count={count}
        />
      )}
    </StyledProductsSectionContainer>
  )
}

export default ProductList