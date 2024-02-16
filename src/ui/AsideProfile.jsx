import styled from "styled-components";
import { Link } from "react-router-dom";
import ProfilePicture from "./ProfilePicture";

import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getUser } from "../features/authentication/userSlice";

const StyledAsideProfileContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 1.5rem;
`

const StyledProfileLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

const StyledProfileDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 1.6rem;
  font-weight: bold;

  >span {
    font-size: 1rem;
    color: var(--color-grey-500);
    font-weight: normal;
    font-size: 1.2rem;
  }
`

const StyledAuthBtn = styled.button`
  height: 40px;
  padding: 0 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  color: #efefef;
  font-weight: bold;
  cursor: pointer;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    height: 35px;
  }

  &.logout {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.login {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  >svg {
    font-size: 1.8rem;
    font-weight: bold;
    flex-shrink: 0;
    transition: var(--main-transition);
  }
`

function AsideProfile() {
  const user = useSelector(getUser);

  return (
    <StyledAsideProfileContainer>
      {user && 
        <StyledProfileLink to="/profile">
          <ProfilePicture />
          <StyledProfileDetails>
            {user.name}
            <span>{user.email}</span>
          </StyledProfileDetails>
        </StyledProfileLink>
      }
      <StyledAuthBtn
        className={user ? "logout" : "login"}
      >
        {user ?
        <>
          <HiOutlineLogout />
          <span>Log out</span>
        </> : 
        <>
          <HiOutlineLogin />
          <span>Log in</span>
        </>
      }
      </StyledAuthBtn>
    </StyledAsideProfileContainer>
  )
}

export default AsideProfile