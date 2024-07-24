import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import SearchProductList from "../features/product/SearchProductList";

const StyledProductsConainer = styled.div`
  width: 100%;
  padding: 40px 40px 60px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: calc(100% - 6rem);
`;

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  return (
    <StyledProductsConainer>
      <SearchProductList />
    </StyledProductsConainer>
  );
}

export default Search;
