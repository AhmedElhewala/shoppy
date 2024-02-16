import styled from "styled-components";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

const StyledCartButton = styled.span`
  position: relative;
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`

const StyledCartQuantity = styled.span`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  position: absolute;
  top: -1.2rem;
  right: -1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-btn-red);
  box-shadow: var(--shadow-btn-red);
  color: #efefef;
  transition: var(--main-transition);
  z-index: 999;
  font-size: 1.2rem;
  font-weight: bold;
`

function CartButton({toggleShoppingCart}) {
  const cartQuantity = useSelector(getTotalCartQuantity);

  return (
    <StyledCartButton
      onClick={toggleShoppingCart}
    >
      {cartQuantity > 0 && <StyledCartQuantity>{cartQuantity}</StyledCartQuantity>}
      <HiShoppingCart />
    </StyledCartButton>
  )
}

export default CartButton