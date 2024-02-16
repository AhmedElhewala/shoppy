import styled from "styled-components"
import { Link } from 'react-router-dom'

import logoLightPath from "/logo-light.png";
import logoDarkPath from "/logo-dark.png";
import { useThemeMode } from "../context/ThemeContext";

const LogoContainer = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  font-weight: bold;
  color: var(--color-grey-900);

  >span {
    display: inline-block;
    font-size: 2.2rem;
  }
`

const LogoImg = styled.img`
  display: block;
  max-width: 2.6rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 2px var(--color-grey-500));

  @media screen and (max-width: 767px) {
    max-width: 2.4rem;
  }
`

function Logo() {
  const {isDark} = useThemeMode();

  return (
    <LogoContainer to="/">
      <LogoImg src={isDark ? logoDarkPath : logoLightPath} alt="Shoopy Logo" />
      <span>Shoppy</span>
    </LogoContainer>
  )
}

export default Logo;