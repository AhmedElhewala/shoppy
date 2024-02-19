import { useRef } from "react"
import styled from "styled-components"
import { useSelector } from "react-redux";
import useOutsideClose from "../../hooks/useOutsideClose";
import { HiCreditCard } from "react-icons/hi";
import { formatCurrency } from "../../utilities/helpers";
import { Link } from "react-router-dom";
import { clearCart, getCart, getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import DeleteButton from "../../ui/DeleteButton";

const StyledCartContainer = styled.div`
  width: 60%;
  max-height: 80vh;
  padding: 20px 16px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  box-shadow: 0 1px 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
  z-index: 10000;
  overflow: auto;
  
    @media (min-width: 768px) and (max-width: 991px) {
      width: 70%;
    }

  @media screen and (max-width: 767px) {
    width: 90%;
  }

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`

const CartHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.8rem;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-500);
    border-radius: 1px;
    position: absolute;
    bottom: -1.5rem;
    left: 0;
  }
`

const StyledCartList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

const CartFooterContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-500);
    border-radius: 1px;
    position: absolute;
    top: -1.5rem;
    left: 0;
  }
`

const CartCheckoutDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CartCheckoutDetailsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  >span {
    font-weight: bold;
  }
`

const CartCheckoutLink = styled(Link)`
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  background-color: var(--color-btn-green);
  color: #efefef;
  box-shadow: var(--shadow-btn-green);

  >svg {
    font-size: 1.8rem;
  }
`

function Cart({closeShoppingCart}) {
  const cart = useSelector(getCart);
  const cartQuantity = useSelector(getTotalCartQuantity);
  const cartTotalPrice = useSelector(getTotalCartPrice);
  const cartRef = useRef();

  useOutsideClose(cartRef, closeShoppingCart, true);


  return (
    <StyledCartContainer ref={cartRef}>
      <CartHeader>
        <span>Cart Summry</span>
        {cartQuantity > 0 &&
          <DeleteButton 
            withDispatch={true}
            handler={clearCart}
            title="Clear cart"
          />
        }
        </CartHeader>
      {cartQuantity > 0 ?
        <StyledCartList>
          {cart.map(item => (
            <CartItem 
              key={item.id}
              item={item}
            />
          ))}
        </StyledCartList> :
        <EmptyCart closeShoppingCart={closeShoppingCart}/>
      }
      {cartQuantity > 0 &&
        <CartFooterContainer>
          <CartCheckoutDetails>
            <CartCheckoutDetailsBox>
              Items in the cart:
              <span>{cartQuantity}</span>
            </CartCheckoutDetailsBox>
            <CartCheckoutDetailsBox>
              Total price:
              <span>{formatCurrency(cartTotalPrice)}</span>
            </CartCheckoutDetailsBox>
          </CartCheckoutDetails>
          <CartCheckoutLink to="/checkout" onClick={closeShoppingCart}>
            <HiCreditCard />
            Checkout
          </CartCheckoutLink>
        </CartFooterContainer>
      }
    </StyledCartContainer>
  )
}

export default Cart