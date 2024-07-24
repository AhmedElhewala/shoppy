import styled from "styled-components"
import { Outlet, useSearchParams } from 'react-router-dom';
import { useEffect } from "react";


const StyledDashboardContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media screen and (max-width: 767px) {
    width: calc(100% - 6rem);
  }
`

function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  return (
    <StyledDashboardContainer>
      <Outlet />
    </StyledDashboardContainer>
  )
}

export default Dashboard