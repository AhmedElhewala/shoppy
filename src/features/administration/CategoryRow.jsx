import styled from "styled-components";
import Table from "../../ui/Table";
import { HiPencil, HiTrash } from "react-icons/hi";

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
  gap: 1rem;
  position: relative;
`

const StyledOperationBtn = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
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

  &.delete {
    background-color: var(--color-btn-red);
    color: #efefef;
    box-shadow: 0 0 4px 2px var(--shadow-btn-red);
  }

  >svg {
    font-size: 2rem;
  }
`

function CategoryRow({ category }) {
  const {id, name, image} = category;

  return (
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
        >
          <HiPencil />
        </StyledOperationBtn>
        <StyledOperationBtn 
          className="delete"
          title="Delete"
        >
          <HiTrash />
        </StyledOperationBtn>
      </StyledOperationsContainer>
    </Table.Row>
  )
}

export default CategoryRow