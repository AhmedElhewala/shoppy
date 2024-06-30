import styled from "styled-components";
import Logo from "./Logo";
import NavList from "./NavList";
import AsideProfile from "./AsideProfile";

const StyledAside = styled.aside`
  background-color: var(--color-grey-100);
  padding: 15px;
  width: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 0 8px 0 var(--color-grey-500);
  transition: var(--main-transition);
  overflow-y: auto;
  position: relative;

  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: 99999;
  }

  &.open {
    width: 26rem;
  }

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`;

function AsideNav({ isAsideOpen }) {
  return (
    <StyledAside className={isAsideOpen ? "open" : ""}>
      <Logo />
      <NavList isAsideOpen={isAsideOpen} />
      <AsideProfile />
    </StyledAside>
  );
}

export default AsideNav;
