import styled from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency, sliceWords } from "../../utilities/helpers";
import { HiPencil, HiPlusSm, HiTrash } from "react-icons/hi";
import { Link } from "react-router-dom";

const StyledId = styled.span`
  font-weight: bold;
`

const StyledTitle = styled.span`
  line-height: 1.4;
`

const StyledDescreption = styled.span`
  font-size: 1.2rem;
  line-height: 1.4;
`

const StyledCategory = styled(Link)`
  
`

const StyledPrice = styled.span`
  font-weight: bold;
`

const StyledImagesContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`

const StyledImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
`

const StyledAddImg = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: var(--color-grey-300);
  color: var(--color-grey-800);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  cursor: pointer;

  >svg {
    font-size: 2rem;
  }
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

function ProductRow({ product }) {
  const {id, title, description, images, category, price} = product;

  return (
    <Table.Row>
      <StyledId>{id}</StyledId>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescreption>{sliceWords(description, 20)}</StyledDescreption>
      <StyledCategory>{category.name}</StyledCategory>
      <StyledPrice>{formatCurrency(price)}</StyledPrice>
      <StyledImagesContainer>
        {images.map(image => (
          <StyledImg 
            src={image}
            alt={title}
            key={image}
          />
        ))}
        <StyledAddImg
          title="Add Image"
        >
          <HiPlusSm />
        </StyledAddImg>
      </StyledImagesContainer>
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

export default ProductRow