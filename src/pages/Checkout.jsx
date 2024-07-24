import styled from "styled-components";
import { useSelector } from "react-redux";

import CheckoutForm from "../features/checkout/CheckoutForm";
import { getUser } from "../features/authentication/userSlice";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import EmptyCheckout from "../features/checkout/EmptyCheckout";

const StyledCheckout = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: calc(100% - 6rem);
`

const StyledCheckoutHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    bottom: -1.5rem;
    left: 0;
  }
`

const StyledHeadingName = styled.h3`
  
`

const StyledHeadingEmail = styled.span`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`

function Checkout() {
  const user = useSelector(getUser);
  const quantity = useSelector(getTotalCartQuantity);

  return (
    <StyledCheckout>
      <StyledCheckoutHeader>
        <StyledHeadingName>
          {`${user.name}'s check out`}
        </StyledHeadingName>
        <StyledHeadingEmail>
          {user.email}
        </StyledHeadingEmail>
      </StyledCheckoutHeader>
      {quantity > 0 ? <CheckoutForm /> : <EmptyCheckout />}
    </StyledCheckout>
  )
}

export default Checkout