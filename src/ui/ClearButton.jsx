import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiOutlineCheck, HiOutlineX, HiTrash } from "react-icons/hi";
import styled from "styled-components";

const StyledClearButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`

const StyledClearBtn = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  color: #efefef;

  &.clear,
  &.confirm {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.cancel {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
  }
`

function ClearButton({clear}) {
  const dispatch = useDispatch();
  const [isClearingCart, setIsClearingCart] = useState(false);
  const [, setConfirmClearingCart] = useState(false);
  const [, setCancelClearingCart] = useState(false);
  
  function handleClickClearCart() {
    setConfirmClearingCart(false);
    setCancelClearingCart(false);
    setIsClearingCart(true);
  }

  function handleClickConfirmClear() {
    dispatch(clear());
    setConfirmClearingCart(true);
    setIsClearingCart(false);
  }

  function handleClickCancelClear() {
    setCancelClearingCart(true);
    setIsClearingCart(false);
  }

  return (
    <StyledClearButtonContainer>
      {isClearingCart ?
        <>
          <StyledClearBtn 
            className="cancel" 
            title="Cancel clearing"
            onClick={handleClickCancelClear}
          >
            <HiOutlineX />
          </StyledClearBtn>
          <StyledClearBtn 
            className="confirm" 
            title="Confirm clearing"
            onClick={handleClickConfirmClear}
          >
            <HiOutlineCheck />
          </StyledClearBtn>
        </> : 
        <StyledClearBtn 
          className="clear" 
          title="Clear the cart"
          onClick={handleClickClearCart}
        >
          <HiTrash />
        </StyledClearBtn>
      }
    </StyledClearButtonContainer>
  )
}

export default ClearButton