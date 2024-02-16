import styled from "styled-components";
import useCategoryProducts from "./useCategoryProducts";
import Spinner from "../../ui/Spinner";
import Pagination from "../../ui/Pagination";
import { PAGE_LIMIT } from "../../utilities/constants";
import { useSearchParams } from "react-router-dom";
import EmptySection from "../../ui/EmptySection";
import ProductItemMini from "../product/ProductItemMini";

const StyledProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const StyledProductsList = styled.div`
  width: 100%;
  gap: 4rem;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

function CategoryProductList() {
  const {isLoading, products, count} = useCategoryProducts();
  const [searchParams,] = useSearchParams();
  const currentPage = Number(searchParams.get("page"))

  if (isLoading || !products) return <Spinner />

  return (
    <StyledProductsContainer>
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
          There is no products with in this category right now, you can try another category
        </EmptySection>
      }
      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination
          length={products.length}
          count={count}
        />
      )}
    </StyledProductsContainer>
  )
}

export default CategoryProductList