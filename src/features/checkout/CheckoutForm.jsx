import styled from "styled-components";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { clearCart, getCart, getTotalCartPrice, getTotalCartQuantity } from "../cart/cartSlice";
import toast from "react-hot-toast";
import FormRowItem from "../../ui/FormRowItem";
import { formatCurrency, formatDate } from "../../utilities/helpers";
import { DELIVERY_COST, DELIVERY_DAYS } from "../../utilities/constants";
import { HiCreditCard } from "react-icons/hi";

const StyledCheckoutContainer = styled.form`
  width: 100%;
  padding: 40px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  color: var(--color-grey-800);

  &::before {
    content: "";
    height: 50%;
    width: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(50%);
  }

  @media screen and (max-width: 767px) {
    &::before {
      content: none;
    }
  }
`

const StyledDetailsContainer = styled.div`
  width: calc(50% - 5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

const StyledInput = styled.input`
  flex-basis: 80%;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }
`

const StyledPaymentMethodContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  align-items: start;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledPaymentMethod = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledPaymentHeading = styled.h4`
  font-size: 1.4rem;
  transition: var(--main-transition);
`

const StyledRadioInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledRadioInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  transition: var(--main-transition);
`

const StyledRadioLabel = styled.label`
  font-size: 1.4rem;
  cursor: pointer;
  transition: var(--main-transition);
`

const StyledCreditCartContainer = styled.div`
  width: 80%;
  position: relative;
  transition: var(--main-transition);

  >svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1rem;
    font-size: 1.8rem;
    color: #000;
  }
`

const StyledCartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
  transition: var(--main-transition);
`

const StyledCartItemTitle = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  transition: var(--main-transition);

  >span {
    font-weight: bold;
  }
`

const StyledCartItemPrice = styled.span`
  font-weight: bold;
  transition: var(--main-transition);
`

const StyledCartDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
  transition: var(--main-transition);

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: -1.5rem;
    left: 0;
  }
`

const StyledCartDetailsItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  position: relative;
  transition: var(--main-transition);

  >span {
    font-weight: bold;
  }
`

const StyledCheckoutNote = styled.p`
  margin-top: 1rem;
  width: 100%;
  line-height: 1.8;
  transition: var(--main-transition);

  >span {
    font-size: 1.6rem;
    font-weight: bold;
  }
`

const StyledCheckoutBtn = styled.button`
  width: 30rem;
  margin: 0 auto;
  padding: 8px 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #efefef;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  position: relative;
  cursor: pointer;
  font-weight: bold;
  transition: var(--main-transition);

  >svg {
    font-size: 1.8rem;
  }
`

function CheckoutForm() {
  const { register, formState, handleSubmit } = useForm();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const { errors } = formState;
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const quantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);
  const deliveryCost = quantity * DELIVERY_COST;
  const currentDate = new Date();
  const deliveredDate = new Date(currentDate.getTime() + DELIVERY_DAYS * 24 * 60 * 60 * 1000);

  function handlePaymentMethod(e) {
    setPaymentMethod(e.target.value);
  }

  function onSubmit() {
    try {
      dispatch(clearCart());
      toast.success(
        `Your cart successfully checked out, Congratulations! Hope to see you more 🥳`
      );
    } catch (err) {
      toast.error("Unfortunately, something went wrong. Please check your data and try again!")
      throw new Error(`The check out process faild: ${err.message}`);
    }
  }

  return (
    <StyledCheckoutContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <StyledDetailsContainer key="user">
        <FormRowItem
          key="location input"
          label="Location"
          error={errors?.location?.message}
        >
          <StyledInput 
            id="locationInput"
            type="text"
            placeholder="Enter your location"
            name="location"
            {...register("location", { required: "This field is required" })}
          />
        </FormRowItem>
        
        <FormRowItem
          key="phone input"
          label="Phone number"
          error={errors?.phone?.message}
        >
          <StyledInput 
            id="phoneInput"
            type="tel"
            placeholder="Enter your phone number"
            name="phone"
            {...register("phone", { 
              required: "This field is required",
              pattern: {
                value:  /^\d+$/,
                message: "Please provide a valid phone number",
              },
            })}
          />
        </FormRowItem>

        <StyledPaymentMethodContainer>
          <StyledPaymentHeading>
            Payment Method
          </StyledPaymentHeading>
          <StyledPaymentMethod>
            <StyledRadioInputContainer key="cash">
              <StyledRadioInput
                id="cash"
                type="radio"
                name="payment"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethod}
              />
              <StyledRadioLabel htmlFor="cash">
                Pay cash when delivery
              </StyledRadioLabel>
            </StyledRadioInputContainer>

            <StyledRadioInputContainer key="credit">
              <StyledRadioInput
                id="credit"
                type="radio"
                name="payment"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={handlePaymentMethod}
              />
              <StyledRadioLabel htmlFor="credit">
                Pay online with credit card
              </StyledRadioLabel>
            </StyledRadioInputContainer>
          </StyledPaymentMethod>
        </StyledPaymentMethodContainer>

        {paymentMethod === "credit" &&
          <FormRowItem
            key="creditKey input"
            label="Credit Key"
            error={errors?.creditKey?.message}
          >
            <StyledCreditCartContainer>
              <HiCreditCard />
              <StyledInput
                id="creditKey"
                style={{textIndent: "3rem", width: "100%"}}
                type="text"
                name="creditKey"
                placeholder="Enter your credit key"
                {...register("creditKey", { 
                  required: "This field is required",
                  pattern: {
                    // /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
                    value:  /^\d{12,}$/,
                    message: "Please provide a valid credit key",
                  },
                })}
              />
            </StyledCreditCartContainer>
          </FormRowItem>
        }
      </StyledDetailsContainer>

      <StyledDetailsContainer key="cart">
        <StyledCartItemsContainer>
          {cart.map(item => (
            <StyledCartItem key={item.id}>
              <StyledCartItemTitle>
                {item.title} <span>x{item.quantity}</span>
              </StyledCartItemTitle>
              <StyledCartItemPrice>
                {formatCurrency(item.totalPrice)}
              </StyledCartItemPrice>
            </StyledCartItem>
          ))}
        </StyledCartItemsContainer>
        <StyledCartDetails>
          <StyledCartDetailsItem key="quantity">
            Items in the cart:
            <span>{quantity}</span>
          </StyledCartDetailsItem>
          <StyledCartDetailsItem key="delivery">
            Delivery cost:
            <span>{quantity} * {DELIVERY_COST} = {formatCurrency(deliveryCost)}</span>
          </StyledCartDetailsItem>
          <StyledCartDetailsItem key="price">
            Total price:
            <span>{formatCurrency(totalPrice + deliveryCost)}</span>
          </StyledCartDetailsItem>
        </StyledCartDetails>
      </StyledDetailsContainer>
      
      <StyledCheckoutNote>
        The delivery of your products will take maximum <span>{DELIVERY_DAYS}</span>days,
        before <span>{formatDate(deliveredDate)}</span> your products will be with you.
      </StyledCheckoutNote>

      <StyledCheckoutBtn type="submit">
        <HiCreditCard />
        Check out
      </StyledCheckoutBtn>
    </StyledCheckoutContainer>
  )
}

export default CheckoutForm