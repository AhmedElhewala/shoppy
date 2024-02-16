import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItemToWatchlist, checkIsItemInWatchlist, deleteItemFromWatchlist } from "../features/watchlist/watchlistSlice";
import { getUser } from "../features/authentication/userSlice";
import { HiHeart } from "react-icons/hi";


const StyledProductWatchlistButton = styled.span`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  box-shadow: 0 0 4px 2px #fff;
  color: #333;
  transition: var(--main-transition);
  z-index: 999;
  cursor: pointer;

  &.marked {
    color: var(--color-btn-red);
  }

  &.small {
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.7rem;
    box-shadow: 0 0 4px 2px #fff;

    >svg {
    font-size: 2rem;
  }
  }

  >svg {
    font-size: 2.4rem;
  }
`

function ProductWatchlistButton({product, size}) {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const isInWatchlist = useSelector(checkIsItemInWatchlist(product.id));
  const navigate = useNavigate();

  function handleToggleWatchlist() {
    if (user) {
      const newProduct = {
        ...product,
        userId: user.id,
      }
      if (isInWatchlist) {
        dispatch(deleteItemFromWatchlist(newProduct));
      } else {
        dispatch(addItemToWatchlist(newProduct));
      }
    } else {
      navigate("/auth/login")
    }
  }

  return (
    <StyledProductWatchlistButton
        className={`
          ${isInWatchlist ? "marked" : ""}
          ${size === "small" ? "small" : ""}
        `}
        onClick={handleToggleWatchlist}
      >
        <HiHeart />
      </StyledProductWatchlistButton>
  )
}

export default ProductWatchlistButton