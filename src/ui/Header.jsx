import styled from "styled-components";
import { useSelector } from "react-redux";
import { getUser } from "../features/authentication/userSlice";

import ProfilePicture from "./ProfilePicture";
import DarkModeBtn from "./DarkModeBtn";
import WatchListButton from "./WatchListButton";
import CartButton from "./CartButton";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { HiOutlineChevronRight, HiOutlineLogin, HiOutlineSearch } from "react-icons/hi";
import Cart from "../features/cart/Cart";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  width: calc(100% - 6rem);
  padding: 15px 20px 15px 40px;
  background-color: var(--header-overlay-color);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  transition: var(--main-transition);
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and  (max-width: 767px) {
    padding-left: 30px;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  &.shrink {
    width: calc(100% - 26rem);
  }
`

const ToggleNavBtn = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  left: -1.5rem;
  font-weight: bold;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  z-index: 10000;

  &.open {
    >svg {
      transform: rotate(180deg);
    }
  }

  >svg {
    font-size: 1.6rem;
    transition: var(--main-transition);
  }
`

const SearchShowBtn = styled.span`
  display: none;
  align-items: center;
  justify-content: center;

  @media screen and  (max-width: 767px) {
    display: flex;
  }

  >svg {
    font-weight: bold;
    font-size: 1.8rem;
  }
`

const NavIconsContainer = styled.div`
  display: flex;
  align-items: center;  
  gap: 1.5rem;
  order: 2;

  @media screen and  (max-width: 767px) {
    gap: 1rem;
    flex: 1;
    justify-content: end;
    order: 1;
  }
`

const StyledLoginBtn = styled(Link)`
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  padding: 6px 16px;
  border-radius: 6px;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    font: 1.8rem;
  }
`

function Header({isAsideOpen, toggleOpenAside, handleCloseAside, showSerachBar, toggleShowSearch}) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const user = useSelector(getUser);
  
  function toggleProfileMenu() {
    if (isAsideOpen && window.innerWidth <= 767) handleCloseAside();
    setIsProfileOpen(open => !open);
  }

  function closeProfileMenu() {
    setIsProfileOpen(false);
  }

  function toggleShoppingCart() {
    if (isAsideOpen && window.innerWidth <= 767) handleCloseAside();
    setIsCartOpen(open => !open);
  }

  function closeShoppingCart() {
    setIsCartOpen(false);
  }

  return (
    <StyledHeader
      className={isAsideOpen ? "shrink" : ""}
    >
      <ToggleNavBtn
        onClick={toggleOpenAside}
        className={isAsideOpen ? "open" : ""}
      >
        <HiOutlineChevronRight />
      </ToggleNavBtn>
      <SearchShowBtn
        onClick={toggleShowSearch}
      >
        <HiOutlineSearch />
      </SearchShowBtn>
      <SearchInput 
        isShow={showSerachBar}
      />
      <NavIconsContainer>
        {user ?
          <ProfilePicture 
            toggleProfileMenu={toggleProfileMenu}
          /> :
          <StyledLoginBtn
            to="/auth/login"
          >
            <HiOutlineLogin />
            <span>Log in</span>
          </StyledLoginBtn>
        }
        <DarkModeBtn />
        <WatchListButton />
        <CartButton 
          toggleShoppingCart={toggleShoppingCart}
        />
      </NavIconsContainer>
      {(isProfileOpen && user) && <ProfileMenu closeProfileMenu={closeProfileMenu} />}
      {isCartOpen && <Cart closeShoppingCart={closeShoppingCart} />}
    </StyledHeader>
  )
}

export default Header