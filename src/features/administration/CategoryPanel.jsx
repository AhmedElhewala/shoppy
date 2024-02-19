import styled from "styled-components"
import Table from "../../ui/Table"
import Spinner from "../../ui/Spinner"
import useCategory from "../category/useCategory"
import { useSearchParams } from "react-router-dom"
import { PAGE_LIMIT } from "../../utilities/constants"
import Pagination from "../../ui/Pagination"
import CategoryRow from "./CategoryRow"
import { useState } from "react"
import CategoryForm from "./categoryForm"

const StyledCategoryPanel = styled.div`
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

function CategoryPanel() {
  const {isLoading, categories} = useCategory();
  const [searchParams, ] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const indexStart = (currentPage - 1) * PAGE_LIMIT;
  const [isAdding, setIsAdding] = useState(false);

  function handleStartAdding() {
    setIsAdding(true);
  }
  
  function handleEndAdding() {
    setIsAdding(false);
  }

  if (isLoading || !categories) return <Spinner />

  const viewedCategories = categories?.slice(indexStart, indexStart + PAGE_LIMIT);

  return (
    <StyledCategoryPanel>
      <Table
        columns="10rem 30rem 30rem 15rem"
      >
        <Table.Header>
          <span>Id</span>
          <span>Name</span>
          <span>Image</span>
          <StyledAddProduct
            title="Add Category"
            onClick={handleStartAdding}
          >
            Add category
          </StyledAddProduct>
        </Table.Header>

        <Table.Body 
          data={viewedCategories}
          render={(category) => (
            <CategoryRow category={category} key={category.id} />
          )}
        />
      </Table>

      {categories.length > PAGE_LIMIT &&
        <Pagination
          count={categories.length}
          length={viewedCategories.length}
        />
      }

      {isAdding &&
        <CategoryForm 
          close={handleEndAdding}
          isOpen={isAdding}
        />
      }
    </StyledCategoryPanel>
  )
}

export default CategoryPanel