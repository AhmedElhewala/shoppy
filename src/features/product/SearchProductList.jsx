import styled from "styled-components"
import useProductSearch from "./useProductSearch"
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import ProductItemMini from "./ProductItemMini";
import EmptySection from "../../ui/EmptySection";
import Pagination from "../../ui/Pagination";
import { PAGE_LIMIT } from "../../utilities/constants";

const StyledSearchProductContainer = styled.div`
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

const StyledSearchHeading = styled.h3`
  margin-bottom: 2rem;
  >span {
    font-weight: bold;
  }
`

function SearchProductList() {
  const {isLoading, products, count} = useProductSearch();
  const [searchParams, ] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));
  const title = searchParams.get("title") && searchParams.get("title");

  if (isLoading || !products) return <Spinner />

  return (
    <StyledSearchProductContainer>
      <StyledSearchHeading>
        Found <span>{count}</span> result{count > 1 ? "s" : ""} about <span>{title}</span>
      </StyledSearchHeading>
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
          There is no products with this title, please try  something else...
        </EmptySection>
      }
      {!(currentPage == 1 && count <= PAGE_LIMIT) && (
        <Pagination
          length={products.length}
          count={count}
        />
      )}
    </StyledSearchProductContainer>
  )
}

export default SearchProductList