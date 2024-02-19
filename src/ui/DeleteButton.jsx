import { useState } from "react";
import { useDispatch } from "react-redux";
import { HiOutlineCheck, HiOutlineX, HiTrash } from "react-icons/hi";
import styled from "styled-components";

const StyledDeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: var(--main-transition);
`

const StyledDeleteBtn = styled.span`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  color: #efefef;

  &.handler,
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

function DeleteButton({handler, withDispatch, title}) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setConfirmDeleting] = useState(false);
  const [, setCancelDeleting] = useState(false);
  
  function handleClickDelete() {
    setConfirmDeleting(false);
    setCancelDeleting(false);
    setIsDeleting(true);
  }

  function handleConfirmDelete() {
    if (handler && withDispatch) {
      dispatch(handler());
    } else if (handler && !withDispatch) {
      handler();
    }
    setConfirmDeleting(true);
    setIsDeleting(false);
  }

  function handleCancelDelete() {
    setCancelDeleting(true);
    setIsDeleting(false);
  }

  return (
    <StyledDeleteButtonContainer>
      {isDeleting ?
        <>
          <StyledDeleteBtn 
            className="cancel" 
            title={`Cancel ${title}`}
            onClick={handleCancelDelete}
          >
            <HiOutlineX />
          </StyledDeleteBtn>
          <StyledDeleteBtn 
            className="confirm" 
            title={`Confirm ${title}`}
            onClick={handleConfirmDelete}
          >
            <HiOutlineCheck />
          </StyledDeleteBtn>
        </> : 
        <StyledDeleteBtn 
          className="handler" 
          title={`${title}`}
          onClick={handleClickDelete}
        >
          <HiTrash />
        </StyledDeleteBtn>
      }
    </StyledDeleteButtonContainer>
  )
}

export default DeleteButton