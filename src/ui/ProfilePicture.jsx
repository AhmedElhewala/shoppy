import styled from "styled-components";
import {useSelector} from "react-redux";
import { HiUser } from "react-icons/hi";
import { getUser } from "../features/authentication/userSlice";
import { useState } from "react";

const StyledProfilePicture = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  cursor: pointer;
  overflow: hidden;
  flex-shrink: 0;

  &>svg {
    font-weight: bold;
    font-size: 2.6rem;
    color: var(--color-grey-900);
    transition: var(--main-transition);
  }

  >img {
    max-width: 100%;
    object-fit: cover;
  }
`

function ProfilePicture({toggleProfileMenu}) {
  const [imgError, setImgError] = useState(false);
  const user = useSelector(getUser);

  function handleImgError() {
    setImgError(true);
  }

  return (
    <StyledProfilePicture
      onClick={toggleProfileMenu}
    >
      {user.avatar && !imgError ? 
        <img src={user.avatar} alt={`${user.name} Avatar`} onError={handleImgError} /> :
        <HiUser />
      }
    </StyledProfilePicture>
  )
}

export default ProfilePicture