import styled from "styled-components"
import { Outlet, useParams, useNavigate, useSearchParams } from 'react-router-dom';
import useCategoryList from "../features/category/useCategoryList";
import { useEffect } from "react";
import CategoryNavList from "../features/category/CategoryNavList";

const StyledCategoryContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: calc(100% - 6rem);
`

function Category() {
  const {id} = useParams();
  const {categories} = useCategoryList();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!id && categories && categories.length > 0) {
      navigate(`/category/${categories[0].id}`);
    }
  }, 
  [id, categories, navigate]);

  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  return (
    <StyledCategoryContainer>
      <CategoryNavList />
      <Outlet />
    </StyledCategoryContainer>
  )
}

export default Category