import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToCart, decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from "../features/cart/cartSlice";
import { getUser } from "../features/authentication/userSlice";
import { HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingCart } from "react-icons/hi";

const StyledProductBtnsContainer = styled.div`
  width: 100%;
  padding: 20px 15px 30px;
  display: flex;
  align-items: end;
  justify-content: center;
  transition: var(--main-transition);

  &.small {
    padding: 0 1rem;
  }
`

const StyledAddProductBtn = styled.button`
  width: 90%;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  cursor: pointer;
  transition: var(--main-transition);

  &.small {
    width: 100%;
    padding: 8px 2px;
    font-size: 1.2rem;
    gap: 0.5rem;
  }
`

const StyledProductQuantityContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  transition: var(--main-transition);
`

const StyledQuantityBtn = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  color: #efefef;

  &.small {
    width: 2rem;
    height: 2rem;
    border-radius: 0.6rem;
  }

  &.increase {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &.decrease {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }
`

const StyledProductQuantity = styled.span`
  font-weight: bold;
  transition: var(--main-transition);
`

function AddProductToCartBtn({product, size}) {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const productQuantity = useSelector(getCurrentQuantityById(product?.id));
  const isInCart = productQuantity > 0;
  const navigate = useNavigate();

  function handleAddToCart() {
    if (user) {
      const newProduct = {
        ...product,
        userId: user?.id,
        quantity: 1,
        totalPrice: product.price * 1,
      }
      if (!isInCart) {
        dispatch(addItemToCart(newProduct));
      }
    } else {
      navigate("/auth/login");
    }
  }

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(product.id));
  }

  function handleDecreaseQuantity() {
    dispatch(decreaseItemQuantity(product.id));
  }

  return (
    <StyledProductBtnsContainer
      className={size === "small" ? "small" : ""}
    >
      {isInCart ?
        <StyledProductQuantityContainer
          className={size === "small" ? "small" : ""}
        >
          <StyledQuantityBtn
            onClick={handleDecreaseQuantity}
            className={`decrease
              ${size === "small" ? "small" : ""}
            `}
          >
            <HiOutlineMinusSm />
          </StyledQuantityBtn>
          <StyledProductQuantity
            className={size === "small" ? "small" : ""}
          >
            {productQuantity}
          </StyledProductQuantity>
          <StyledQuantityBtn
            onClick={handleIncreaseQuantity}
            className={`increase
              ${size === "small" ? "small" : ""}
            `}
          >
            <HiOutlinePlusSm />
          </StyledQuantityBtn>
        </StyledProductQuantityContainer> :
        <StyledAddProductBtn
          onClick={handleAddToCart}
          className={size === "small" ? "small" : ""}
        >
          <HiShoppingCart />
          <span>Add to cart</span>
        </StyledAddProductBtn>
      }
    </StyledProductBtnsContainer>
  )
}

export default AddProductToCartBtn