import { useState } from "react"
import { useSelector } from "react-redux";
import { FaBoxOpen } from "react-icons/fa"
import { HiChevronDown, HiDatabase, HiHeart, HiHome, HiViewGrid } from "react-icons/hi"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import useCategoryList from "../features/category/useCategoryList"
import Spinner from "./Spinner"
import { getUser } from "../features/authentication/userSlice";

const StyledNav = styled.nav`
  width: 100%;
  padding: 50px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const NavItemContainer = styled.div`
  width: 100%;
  position: relative;
`

const NavItemLink = styled(NavLink)`
  width: 100%;
  padding-left: 2px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: var(--main-transition);

  &:hover,
  &.active {
    background-color: var(--overlay-background);
  }
`

const SubmenuOpenBtn = styled.span`
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &.rotate {
    >svg {
      transform: rotate(180deg);
    }
  }

  >svg {
    font-size: 2rem;
    cursor: pointer;
    transition: var(--main-transition);
  }
`

const NavItemLinkContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 8px 0;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;

  >svg {
    font-size: 2.6rem;
    flex-shrink: 0;
    filter: drop-shadow(0 1px 2px var(--color-grey-500));
  }
`

const NavItemSubMenu = styled.ul`
  width: 100%;
  border-radius: 8px;
  display: none;
  flex-direction: column;
  background-color: var(--color-grey-200);
  transition: var(--main-transition);
  overflow: hidden;

  &.open {
    display: flex;
  }
`

const StyledNavSubMenuItem = styled.li`
  width: 100%;
`

const StyledNavSubMenuItemLink = styled(NavLink)`
  width: 100%;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  transition: var(--main-transition);

  &.active,
  &:hover {
    background-color: var(--overlay-background);
  }
`

function NavList({isAsideOpen}) {
  const user = useSelector(getUser);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const {isLoading, categories} = useCategoryList();

  if (isLoading) return <Spinner />

  function toggleOpenSubmenu(wrapper) {
    if (submenuOpen === wrapper) {
      setSubmenuOpen("");
    } else {
      setSubmenuOpen(wrapper);
    }
  }
  
  return (
    <StyledNav>
      <NavItemContainer>
        <NavItemLink to="/" title="Home">
          <NavItemLinkContent>
            <HiHome />
            Home
          </NavItemLinkContent>
        </NavItemLink>
      </NavItemContainer>

      {user?.role === "admin" && (
        <NavItemContainer>
          <NavItemLink
            to="/dashboard"
            title="Dashboard"
            className={location.pathname.split("/")[1] === "dashboard" && "active"}
          >
            <NavItemLinkContent>
              <HiDatabase />
              Dashboard
            </NavItemLinkContent>
            <SubmenuOpenBtn
              onClick={
                (e) => {
                  e.preventDefault();
                  toggleOpenSubmenu("dashboard")
                }
              }
              className={submenuOpen === "dashboard" ? "rotate" : ""}
            >
              <HiChevronDown />
            </SubmenuOpenBtn>
          </NavItemLink>
          <NavItemSubMenu
            className={submenuOpen === "dashboard" && isAsideOpen ? "open" : ""}
          >
            <StyledNavSubMenuItem key="user">
              <StyledNavSubMenuItemLink to="/dashboard/user">
                Users
              </StyledNavSubMenuItemLink>
            </StyledNavSubMenuItem>
            <StyledNavSubMenuItem key="category">
              <StyledNavSubMenuItemLink to="/dashboard/category">
                Categories
              </StyledNavSubMenuItemLink>
            </StyledNavSubMenuItem>
            <StyledNavSubMenuItem key="product">
              <StyledNavSubMenuItemLink to="/dashboard/product">
                Products
              </StyledNavSubMenuItemLink>
            </StyledNavSubMenuItem>
          </NavItemSubMenu>
        </NavItemContainer>
      )}

      <NavItemContainer>
        {categories && categories.length > 0 &&
          <NavItemLink 
            to={`/category/${categories[0].id}`} 
            title="Category"
            className={location.pathname.split("/")[1] === "category" && "active"}
          >
            <NavItemLinkContent>
              <HiViewGrid />
              Category
            </NavItemLinkContent>
            <SubmenuOpenBtn
              onClick={
                (e) => {
                  e.preventDefault();
                  toggleOpenSubmenu("category")
                }
              }
              className={submenuOpen === "category" ? "rotate" : ""}
            >
              <HiChevronDown />
            </SubmenuOpenBtn>
          </NavItemLink>
        }
        {categories && categories.length > 0 && 
          <NavItemSubMenu
            className={submenuOpen === "category" && isAsideOpen ? "open" : ""}
          >
            {categories.map(category => (
              <StyledNavSubMenuItem key={category.id}>
                <StyledNavSubMenuItemLink to={`/category/${category.id}`}>
                  {category.name}
                </StyledNavSubMenuItemLink>
              </StyledNavSubMenuItem>
            ))}
          </NavItemSubMenu>
        }
      </NavItemContainer>
      
      <NavItemContainer>
        <NavItemLink to="/product" title="Product">
          <NavItemLinkContent>
            <FaBoxOpen />
            Products
          </NavItemLinkContent>
        </NavItemLink>
      </NavItemContainer>

      <NavItemContainer>
        <NavItemLink to="/watchlist" title="Watch List">
          <NavItemLinkContent>
            <HiHeart />
            Watch List
          </NavItemLinkContent>
        </NavItemLink>
      </NavItemContainer>
    </StyledNav>
  )
}

export default NavList