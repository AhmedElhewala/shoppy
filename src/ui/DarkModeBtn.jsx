import styled from "styled-components"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useThemeMode } from "../context/ThemeContext";

const ModeButton = styled.span`
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2.2rem;
    color: var(--color-grey-900);
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
    transition: var(--main-transition);
  }
`

function DarkModeBtn() {
  const {isDark, toggleTheme} = useThemeMode()

  return (
    <ModeButton onClick={toggleTheme}>
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ModeButton>
  )
}

export default DarkModeBtn