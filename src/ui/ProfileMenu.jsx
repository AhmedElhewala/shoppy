import { Link } from "react-router-dom"
import styled from "styled-components"

import { HiDatabase, HiUser } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import UserAuthButton from "./UserAuthButton";
import { useRef } from "react";
import useOutsideClose from "../hooks/useOutsideClose";
import { useSelector } from "react-redux";
import { getUser } from "../features/authentication/userSlice";


const StyledProfileContainer = styled.div`
  min-width: 25rem;
  padding: 16px;
  background-color: var(--color-grey-300);
  color: var(--color-grey-700);
  border-radius: 8px;
  position: absolute;
  top: 100%;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  box-shadow: 0 1px 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
`

const StyledProfileDetails = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-500);
    position: absolute;
    left: 0;
    bottom: -1.2rem;
  }

  >span {
    font-size: 1.2rem;
    color: var(--color-grey-500);
    font-weight: normal;
  }
`

const StyledProfileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const ProfileMenuItem = styled.li`
  width: 100%;
`

const ProfileMenuLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: var(--main-transition);

  &:hover {
    padding-left: 1rem;
  }
`

const AuthButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProfileMenu({closeProfileMenu}) {
  const user = useSelector(getUser);
  const profileRef = useRef();

  useOutsideClose(profileRef, closeProfileMenu, true)

  return (
    <StyledProfileContainer ref={profileRef} >
      <StyledProfileDetails>
        {user.name}
        <span>{user.email}</span>
      </StyledProfileDetails>
      <StyledProfileMenu>
        <ProfileMenuItem>
          <ProfileMenuLink 
            to="/profile" 
            onClick={closeProfileMenu}
          >
            <HiUser />
            Profile
          </ProfileMenuLink>
        </ProfileMenuItem>
        {user?.role === "admin" && (
          <ProfileMenuItem>
            <ProfileMenuLink 
              to="/dashboard"
              onClick={closeProfileMenu}
            >
              <HiDatabase />
              Dashboard
            </ProfileMenuLink>
          </ProfileMenuItem>
        )}
        <ProfileMenuItem>
          <ProfileMenuLink 
            to="/watchlist"
            onClick={closeProfileMenu}
          >
            <HiHeart />
            Watch List
          </ProfileMenuLink>
        </ProfileMenuItem>
      </StyledProfileMenu>
      <AuthButtonContainer>
        <UserAuthButton />
      </AuthButtonContainer>
    </StyledProfileContainer>
  )
}

export default ProfileMenu