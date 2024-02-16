import styled from "styled-components"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiHeart } from "react-icons/hi";
import { getTotalWatchlistQuantity } from "../features/watchlist/watchlistSlice";

const StyledWatchlistLink = styled(Link)`
  cursor: pointer;
  position: relative;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`

const StyledWatchlistQuantity = styled.span`
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

function FavouritesButton() {
  const watchListQuantity = useSelector(getTotalWatchlistQuantity);

  return (
    <StyledWatchlistLink to="/watchlist">
      {watchListQuantity > 0 && <StyledWatchlistQuantity>{watchListQuantity}</StyledWatchlistQuantity>}
      <HiHeart />
    </StyledWatchlistLink>
  )
}

export default FavouritesButton