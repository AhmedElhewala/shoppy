import styled from "styled-components";
import ProductList from "../features/product/ProductList";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const StyledProductsContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;

  width: calc(100% - 6rem);

  @media screen and (max-width: 767px) {
    padding: 40px 16px;
  }
`;

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <StyledProductsContainer>
      <ProductList />
    </StyledProductsContainer>
  );
}

export default Product;
