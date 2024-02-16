import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledEmptyWatchList = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`

const StyledEmptyMessage = styled.p`
  line-height: 1.6;
  font-weight: bold;
`

const StyledBackToProductsBtn = styled(Link)`
  padding: 6px 20px;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  box-shadow: 0 0 2px 2px var(--color-grey-500);;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
`

function EmptyWatchList() {
  return (
    <StyledEmptyWatchList>
      <StyledEmptyMessage>Your watch list still empty, please go add some items 😀</StyledEmptyMessage>
      <StyledBackToProductsBtn to="/product" >
        Go to products
      </StyledBackToProductsBtn>
    </StyledEmptyWatchList>
  )
}

export default EmptyWatchList