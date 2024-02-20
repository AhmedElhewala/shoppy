import styled from "styled-components";
import Table from "../../ui/Table";
import { HiPencil } from "react-icons/hi";
import DeleteButton from "../../ui/DeleteButton";
import useDeleteCategory from "./useDeleteCategory";
import { useState } from "react";
import CategoryForm from "./categoryForm";

const StyledId = styled.span`
  font-weight: bold;
`

const StyledName = styled.span`

`

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`

const StyledOperationsContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
`

const StyledOperationBtn = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.7rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.edit {
    background-color: var(--color-grey-700);
    color: var(--color-grey-100);
    box-shadow: 0 0 4px 2px var(--color-grey-500) inset;
  }

  >svg {
    font-size: 1.8rem;
  }
`

function CategoryRow({ category }) {
  const {id, name, image} = category;
  const {deleteCategory} = useDeleteCategory();
  const [isEditing, setIsEditing] = useState(false);
  
  function handleStartEditing() {
    setIsEditing(true);
  }
  
  function handleEndEditing() {
    setIsEditing(false);
  }

  function handleDelete() {
    deleteCategory(id);
  }

  return (
    <>
      <Table.Row>
        <StyledId>{id}</StyledId>
        <StyledName>{name}</StyledName>
        <StyledImg 
          src={image}
          alt={name}
        />
        <StyledOperationsContainer
        >
          <StyledOperationBtn 
            className="edit"
            title="Edit"
            onClick={handleStartEditing}
          >
            <HiPencil />
          </StyledOperationBtn>
          <DeleteButton 
            title="Delete category"
            handler={handleDelete}
            withDispatch={false}
          />
        </StyledOperationsContainer>
      </Table.Row>
      {isEditing &&
        <CategoryForm 
          category={category}
          close={handleEndEditing}
          isOpen={isEditing}
        />
      }
    </>
  )
}

export default CategoryRow