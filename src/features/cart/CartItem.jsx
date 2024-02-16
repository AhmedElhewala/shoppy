import styled from "styled-components";
import { useDispatch } from "react-redux";

import { formatCurrency } from "../../utilities/helpers";
import { HiOutlineCheck, HiOutlineMinusSm, HiOutlinePlusSm, HiOutlineX, HiTrash } from "react-icons/hi";
import { useState } from "react";
import { decreaseItemQuantity, deleteItemFromCart, increaseItemQuantity } from "./cartSlice";

const StyledCartItem = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  color: var(--color-grey-900);
  box-shadow: 0 0 6px 1px var(--color-grey-500);
  overflow: hidden;
  position: relative;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`

const ItemImgContainer = styled.div`
  width: 25%;
  display: flex;
  position: relative;
  transition: var(--main-transition);

  &.shrink {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const ItemImg = styled.img`
  width: 80%;
  object-fit: cover;
  transition: var(--main-transition);

  &.full {
    width: 100%;
  }
`

const ItemGalleryContainer = styled.div`
  padding: 2px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  gap: 2px;
  transition: var(--main-transition);
`

const ItemGalleryImg = styled.img`
  flex: 1;
  object-fit: fit;
  cursor: pointer;
  box-shadow: 0 0 4px 2px #333;
  border-radius: 2px;
  transition: var(--main-transition);

  &.active {
    box-shadow: 0 0 1px 2px #000;
  }
`

const ItemDetailsContainer = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    padding: 3rem 2rem;
    gap: 3rem;
  }
`

const ItemHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  transition: var(--main-transition);
  line-height: 1.4;
`

const ItemDeleteBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`

const ItemDeleteBtn = styled.span`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 0.6rem;
  color: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;

  &.delete,
  &.confirm {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.cancel {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.4rem;
  }
`

const ItemPriceCountContainer = styled.span`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const ItemPrice = styled.span`
  font-weight: bold;
  transition: var(--main-transition);
`

const ItemQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`

const ItemQuantityBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  color: #efefef;
  transition: var(--main-transition);

  &.increase {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &.decrease {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }
`

const ItemQuantity = styled.span`
  font-weight: bold;
  transition: var(--main-transition);
`

function CartItem({item}) {
  const {id, title, quantity, totalPrice, images} = item;
  const [viewedImg, setViewedImg] = useState(images && images[0]);
  const [imgError, setImgError] = useState(false);
  const dispatch = useDispatch();
  const [isDeletingItem, setIsDeletingItem] = useState(false);
  const [, setConfirmDeletingItem] = useState(false);
  const [, setCancelDeletingItem] = useState(false);

  function handleViewedImg(e) {
    setViewedImg(e.target.src);
  }

  function handleImgError() {
    setImgError(true);
  }

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(id));
  }

  function handleClickDeleteItem() {
    setConfirmDeletingItem(false);
    setConfirmDeletingItem(false);
    setIsDeletingItem(true);
  }

  function handleClickConfirmDelete() {
    dispatch(deleteItemFromCart(id));
    setConfirmDeletingItem(true);
    setIsDeletingItem(false);
  }

  function handleClickCancelDelete() {
    setCancelDeletingItem(true);
    setIsDeletingItem(false); 
  }

  return (
    <StyledCartItem>
      <ItemImgContainer className={imgError ? "shrink" : ""}>
        {!imgError && 
          <>
            <ItemImg 
              src={viewedImg}
              alt={title}
              onError={handleImgError}
              className={images.length > 1 ? "" : "full"}
            />
            {images.length > 1 &&
              <ItemGalleryContainer>
                {images.map(image => (
                  <ItemGalleryImg 
                    src={image}
                    alt={title}
                    key={image}
                    onClick={handleViewedImg}
                    className={viewedImg === image ? "active" : ""}
                  />
                ))}
              </ItemGalleryContainer>
            }
          </>
        }
      </ItemImgContainer>
      <ItemDetailsContainer>
        <ItemHeaderContainer>
          <ItemTitle>{title}</ItemTitle>
          <ItemDeleteBtnContainer>
            {isDeletingItem ?
              <>
                <ItemDeleteBtn
                  className="cancel" 
                  title="Cancel deleting"
                  onClick={handleClickCancelDelete}
                >
                  <HiOutlineX />
                </ItemDeleteBtn>
                <ItemDeleteBtn
                  className="confirm" 
                  title="Confirm deleting"
                  onClick={handleClickConfirmDelete}
                >
                  <HiOutlineCheck />
                </ItemDeleteBtn>
              </> :
              <ItemDeleteBtn
                className="delete" 
                title="Delete the cart"
                onClick={handleClickDeleteItem}
              >
                <HiTrash />
              </ItemDeleteBtn>
            }
          </ItemDeleteBtnContainer>
        </ItemHeaderContainer>
        <ItemPriceCountContainer>
          <ItemPrice>{formatCurrency(totalPrice)}</ItemPrice>
          <ItemQuantityContainer>
            <ItemQuantityBtn
              className="decrease"
              title="Decrease quantity"
              onClick={handleDecreaseQuantity}
            >
              <HiOutlineMinusSm />
            </ItemQuantityBtn>
            <ItemQuantity>{quantity}</ItemQuantity>
            <ItemQuantityBtn
              className="increase"
              title="Increase quantity"
              onClick={handleIncreaseQuantity}
            >
              <HiOutlinePlusSm />
            </ItemQuantityBtn>
          </ItemQuantityContainer>
        </ItemPriceCountContainer>
      </ItemDetailsContainer>
    </StyledCartItem>
  )
}

export default CartItem