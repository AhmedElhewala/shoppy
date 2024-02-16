import styled from "styled-components"
import { useNavigate } from "react-router-dom";

import { HiOutlineExclamation, HiOutlineArrowSmLeft } from "react-icons/hi";

const ErrorContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const StyledExclamationIcon = styled(HiOutlineExclamation)`
  font-weight: bold;
  font-size: 6rem;
`

const ErrorMsgContainer = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`

const ErrorMsg = styled.p`
  margin: 0;
`

const ErrorLink = styled.button`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 5px;
  padding: 1rem 5rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px 1px var(--color-grey-700);
  transition: var(--main-transition);
  &:hover {
    transform: scale(1.05);
  }
  &>span {
    transition: var(--main-transition);
  }
`

const StyledHomeIcon = styled(HiOutlineArrowSmLeft )`
  transition: var(--main-transition);
  font-weight: bold;
  font-size: 1.8rem;
`

function Unauthorized() {
  const navigate = useNavigate();

  return (
    <ErrorContainer>
      <StyledExclamationIcon />
      <ErrorMsgContainer>
        <ErrorMsg>
          Oh, Sorry! you are not allowed to reach this route.
        </ErrorMsg>
        <ErrorMsg>
          Please! Go Back and go to the authorized routes 😃
        </ErrorMsg>
        <ErrorLink 
          onClick={() => navigate(-1)}
        >
          <StyledHomeIcon />
          <span>Back</span>
        </ErrorLink>
      </ErrorMsgContainer>
    </ErrorContainer>
  )
}

export default Unauthorized