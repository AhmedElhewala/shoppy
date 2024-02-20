import styled from "styled-components";
import Table from "../../ui/Table";
import { formatCurrency, sliceWords } from "../../utilities/helpers";
import { HiPencil } from "react-icons/hi";
import { Link } from "react-router-dom";
import DeleteButton from "../../ui/DeleteButton";
import useDeleteProduct from "./useDeleteProduct";
import ProductForm from "./ProductForm";
import { useState } from "react";

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

  &.delete,
  &.confirm {
    background-color: var(--color-btn-red);
    color: #efefef;
    box-shadow: 0 0 4px 2px var(--shadow-btn-red);
  }
  
  &.cancel {
    background-color: var(--color-btn-green);
    color: #efefef;
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`

function ProductRow({ product }) {
  const {id, title, description, images, category, price} = product;
  const {deleteProduct} = useDeleteProduct();
  const [isEditing, setIsEditing] = useState(false);
  
  function handleStartEditing() {
    setIsEditing(true);
  }
  
  function handleEndEditing() {
    setIsEditing(false);
  }

  function handleDelete() {
    deleteProduct(id);
  }

  return (
    <>
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
        </StyledImagesContainer>
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
            title="Delete product"
            handler={handleDelete}
            withDispatch={false}
          />
        </StyledOperationsContainer>
      </Table.Row>
      {isEditing &&
        <ProductForm 
          product={product}
          close={handleEndEditing}
          isOpen={isEditing}
        />
      }
    </>
  )
}

export default ProductRow