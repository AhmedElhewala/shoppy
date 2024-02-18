import styled from "styled-components"
import { Outlet } from 'react-router-dom';


const StyledDashboardContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

function Dashboard() {

  return (
    <StyledDashboardContainer>
      <Outlet />
    </StyledDashboardContainer>
  )
}

export default Dashboard