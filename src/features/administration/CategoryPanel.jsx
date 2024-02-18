import styled from "styled-components"
import Table from "../../ui/Table"
import Spinner from "../../ui/Spinner"
import useCategoryList from "../category/useCategoryList"
import CategoryRow from "./CategoryRow"

const StyledCategoryPanel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 5rem;
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

function CategoryPanel() {
  const {isLoading, categories} = useCategoryList();

  if (isLoading) return <Spinner />

  return (
    <StyledCategoryPanel>
      <Table
        columns="0.6fr 1.2fr 1.2fr 1.2fr"
      >
        <Table.Header>
          <span>Id</span>
          <span>Name</span>
          <span>Image</span>
          <StyledAddProduct
            title="Add Category"
          >
            Add category
          </StyledAddProduct>
        </Table.Header>

        <Table.Body 
          data={categories}
          render={(category) => (
            <CategoryRow category={category} key={category.id} />
          )}
        />
      </Table>
    </StyledCategoryPanel>
  )
}

export default CategoryPanel