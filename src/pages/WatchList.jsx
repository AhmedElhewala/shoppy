import styled from "styled-components";
import WatchListProducts from "../features/watchlist/WatchListProducts";

const StyledWatchListContainer = styled.div`
  width: 100%;
  padding: 40px;
  padding-bottom: 80px;
  min-height: 90vh;
  position: relative;
`

function WatchList() {
  return (
    <StyledWatchListContainer>
      <WatchListProducts />
    </StyledWatchListContainer>
  )
}

export default WatchList