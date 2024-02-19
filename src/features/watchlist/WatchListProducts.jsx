import styled from "styled-components";
import { useSelector } from "react-redux";
import { clearWatchlist, getTotalWatchlistQuantity, getWatchlist } from "../watchlist/watchlistSlice";
import EmptyWatchList from "./EmptyWatchList"
import ProductItemMini from "../product/ProductItemMini";
import DeleteButton from "../../ui/DeleteButton";

const StyledWatchListProductContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const StyledProductsList = styled.div`
  width: 100%;
  gap: 4rem;
  justify-content: space-around;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

const StyledWatchListHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  position: relative;
`

const StyledWatchListHeading = styled.h3`
  margin-bottom: 2rem;

  >span {
    font-weight: bold;
  }
`

function WatchListProducts() {
  const watchListProducts = useSelector(getWatchlist);
  const watchListQuantity = useSelector(getTotalWatchlistQuantity);


  return (
    <StyledWatchListProductContainer>
      <StyledWatchListHeaderContainer>
        <StyledWatchListHeading>
          You have <span>{watchListQuantity}</span> product{watchListQuantity > 1 ? "s" : ""} in your watch list.
        </StyledWatchListHeading>
        {watchListQuantity > 0 &&
          <DeleteButton
            withDispatch={true}
            handler={clearWatchlist}
            title="Clear list"
          />
        }
      </StyledWatchListHeaderContainer>
      {watchListQuantity > 0 ?
        <StyledProductsList>
          {watchListProducts.map(product => (
            <ProductItemMini 
              key={product.id}
              product={product}
            />
          ))}
        </StyledProductsList> :
        <EmptyWatchList />
      }
    </StyledWatchListProductContainer>
  )
}

export default WatchListProducts