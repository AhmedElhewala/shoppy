import styled from "styled-components";
import { Link, Outlet } from 'react-router-dom';
import { useThemeMode } from "../context/ThemeContext";

import logoLightPath from "/logo-light.png";
import logoDarkPath from "/logo-dark.png";

const StyledAuth = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("/shopping pattern.png");
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    position: absolute;
    top: 0;
    left: 0;
  }
`

const StyledAuthContainer = styled.div`
  width: 50%;
  height: max-content;
  padding: 30px 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  position: relative;
  z-index: 99;
  
  @media screen and (max-width: 767px) {
    width: 90%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 70%;
  }
`

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  color: var(--color-grey-900);

  >span {
    display: inline-block;
    font-size: 2.6rem;
    filter: drop-shadow(0 1px 4px var(--color-grey-500));
  }
`

const LogoImg = styled.img`
  display: block;
  max-width: 3.4rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 4px var(--color-grey-500));

  @media screen and (max-width: 767px) {
    max-width: 2.4rem;
  }
`

function Auth() {
  const {isDark} = useThemeMode();

  return (
    <StyledAuth>
      <StyledAuthContainer>
        <LogoContainer to="/">
          <LogoImg src={isDark ? logoDarkPath : logoLightPath} alt="Shoopy Logo" />
          <span>Shoppy</span>
        </LogoContainer>
        <Outlet />
      </StyledAuthContainer>
    </StyledAuth>
  )
}

export default Auth