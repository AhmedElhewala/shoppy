import styled from "styled-components"
import useCategoryList from "./useCategoryList"
import { NavLink } from "react-router-dom";

const StyledCategoryList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
`

const StyledCategoryLink = styled(NavLink)`
  padding: 8px 20px;
  border-radius: 8px;
  background-color: var(--color-grey-600);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 2px var(--color-grey-500);
  transition: var(--main-transition);
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    flex: 1;
  }

  &:hover {
    transform: scale(1.05);
  }

  &.active,
  &:hover {
    background-color: var(--color-grey-900);
  }
`

function CategoryNavList() {
  const {categories} = useCategoryList();

  return (
  <StyledCategoryList>
    {categories?.length > 0 &&
      categories.map(category => (
        <StyledCategoryLink
          to={`/category/${category.id}`}
          key={category.id}
        >
          {category.name}
        </StyledCategoryLink>
      ))
    }
  </StyledCategoryList>
  )
}

export default CategoryNavList