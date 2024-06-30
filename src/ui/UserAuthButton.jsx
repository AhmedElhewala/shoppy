import styled from "styled-components";

import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { useSelector } from "react-redux";
import { getUser } from "../features/authentication/userSlice";
import useLogout from "../features/authentication/useLogout";
import { useNavigate } from "react-router-dom";

const StyledAuthButton = styled.div`
  width: 10em;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  background-color: var(--color-btn-red);
  color: #efefef;
  box-shadow: var(--shadow-btn-red);
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: var(--main-transition);

  &.logout {
    background-color: var(--color-btn-red);
    box-shadow: var(--shadow-btn-red);
  }

  &.login {
    background-color: var(--color-btn-green);
    box-shadow: var(--shadow-btn-green);
  }

  &:hover {
    transform: scale(1.05);
  }

  > svg {
    font-weight: bold;
  }
`;

function UserAuthButton() {
  const user = useSelector(getUser);
  const { logout } = useLogout();
  const navigate = useNavigate();

  return (
    <StyledAuthButton
      className={user ? "logout" : "login"}
      onClick={() => {
        if (user) {
          logout();
        } else {
          navigate("/auth/login");
        }
      }}
    >
      {user ? (
        <>
          <HiOutlineLogout />
          Log out
        </>
      ) : (
        <>
          <HiOutlineLogin />
          Log in
        </>
      )}
    </StyledAuthButton>
  );
}

export default UserAuthButton;
