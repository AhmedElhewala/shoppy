import styled from "styled-components";
import AsideNav from "./AsideNav";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";
import GoUpBtn from "./GoUpBtn";
import NavBtn from "./NavBtn";

const StyledAppLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  transition: var(--main-transition);
  display: flex;
`;

const StyledHeaderMainContainer = styled.div`
  width: calc(100% - 6rem);
  flex: 1 0 0;
  padding-top: 6rem;
  min-height: 100vh;
  position: relative;
  left: 26rem;

  &.full {
    left: 6rem;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 6rem);
    left: 6rem;

    &.grow {
      padding-top: 8rem;
    }
  }
`;

function AppLayout({ children }) {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [showSerachBar, setShowSerachBar] = useState(false);

  function toggleOpenAside() {
    setIsAsideOpen((open) => !open);
  }

  function handleCloseAside() {
    setIsAsideOpen(false);
  }

  function toggleShowSearch() {
    setShowSerachBar((show) => !show);
    if (!showSerachBar && isAsideOpen) handleCloseAside();
  }

  return (
    <StyledAppLayout>
      <AsideNav isAsideOpen={isAsideOpen} toggleOpenAside={toggleOpenAside} />
      <NavBtn isAsideOpen={isAsideOpen} toggleOpenAside={toggleOpenAside} />
      <StyledHeaderMainContainer
        className={`
          ${!isAsideOpen ? "full" : ""}
          ${showSerachBar ? "grow" : ""}
        `}
      >
        <Header
          isAsideOpen={isAsideOpen}
          toggleOpenAside={toggleOpenAside}
          handleCloseAside={handleCloseAside}
          showSerachBar={showSerachBar}
          toggleShowSearch={toggleShowSearch}
        />
        {children}
        <Footer />
        <GoUpBtn />
      </StyledHeaderMainContainer>
    </StyledAppLayout>
  );
}

export default AppLayout;
