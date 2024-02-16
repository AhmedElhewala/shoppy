import styled from "styled-components";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { IMGBB_API_KEY } from "../utilities/constants";
import { HiCamera, HiEye, HiEyeOff, HiOutlineRefresh, HiPencilAlt, HiTrash, HiUser } from "react-icons/hi";
import { getUser } from "../features/authentication/userSlice";
import FormRowItem from "../ui/FormRowItem";

const StyledProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 80px 40px;
  position: relative;
  display: flex;
  justify-content: center;
`

const StyledProfileForm = styled.form`
  width: 60%;
  padding: 100px 20px 40px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: var(--main-transition);
  position: relative;

  
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
  }
`

const StyledAvatarConatiner = styled.div`
  width: 8rem;
  height: 8rem;
  background-color: var(--color-grey-300);
  color: var(--color-grey-900);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  border-radius: 50%;
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    >div {
      bottom: 0;
    }
  }
`

const StyledAvatarImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: var(--main-transition);
`

const StyledAvatarIconContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  >svg {
    font-size: 8rem;
  }
`

const StyledAvatarButton = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: -100%;
  left: 0;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  opacity: 0.9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);
  cursor: pointer;
  z-index: 99;

  >svg {
    font-size: 2rem;
  }
`

const StyledAvatarInput = styled.input`
  display: none;
`

const StyledEditAvaterBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    font-size: 1.6rem;
  }
`

const StyledInput = styled.input`
  flex-basis: 80%;
  padding: 8px 12px;
  text-indent: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  transition: var(--main-transition);

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }

  &:disabled {
    background-color: #ccc;
    font-weight: bold;
  }
`

const StyledEditInputBtn = styled.span`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-grey-100);
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    transition: var(--main-transition);
  }
`

const StyledEditPasswordBtn = styled.span`
  width: 100%;
  padding: 6px 12px;
  margin: 1rem 0;
  border-radius: 6px;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
`

const StyledTogglePasswordButton = styled.span`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: 0;
  color: var(--color-grey-100);
  cursor: pointer;
  transition: var(--main-transition);

  >svg {
    transition: var(--main-transition);
  }
`

const StyledButton = styled.button`
  width: 100%;
  margin: 1rem 0;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-btn-green);
  box-shadow: var(--shadow-btn-green);
  color: #efefef;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`

function Profile() { //  getValues
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const user = useSelector(getUser);
  const avatarRef = useRef();
  const [isAvatarEditing, setIsAvatarEditing] = useState(false);
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormEdititng, setIsFormEdititng] = useState(false);
  
  function handleClickAvatar() {
    if (avatarRef && avatarRef.current) avatarRef.current.click();
  }

  function handleToggleCurrentPassword() {
    setShowCurrentPassword(show => !show)
  }

  function handleToggleNewPassword() {
    setShowNewPassword(show => !show)
  }

  function handleToggleConfirmPassword() {
    setShowConfirmPassword(show => !show)
  }

  function handleStartAvatarEditing() {
    setIsAvatarEditing(true);
    setIsFormEdititng(true);
    handleClickAvatar();
  }

  function handleStartNameEditing() {
    setIsNameEditing(true);
    setIsFormEdititng(true);
  }

  function handleStartEmailEditing() {
    setIsEmailEditing(true);
    setIsFormEdititng(true);
  }

  function handleStartPasswordEditing() {
    setIsPasswordEditing(true);
    setIsFormEdititng(true);
  }

  async function handleAvatarChange (e) {
    const selectedAvatar = e.target.files[0];
    
    if (selectedAvatar) {
      const formData = new FormData();
      formData.append('image', selectedAvatar);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
          formData
        );

        const imageUrl = response.data.data.url;
        setAvatar(imageUrl);
      } catch (err) {
        console.error(`Error uploading image: ${err.message}`);
      }
    }
  }

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleClearAvatar() {
    if (!isAvatarEditing) handleStartAvatarEditing();
    setAvatar("");
  }

  function handleResetAvatar() {
    setAvatar(user.avatar);
    setIsAvatarEditing(false);
    if (!isEmailEditing || !isNameEditing || !isPasswordEditing) {
      setIsFormEdititng(false);
    }
  }

  function handleResetName() {
    setUsername(user.name);
    setIsNameEditing(false);
    if (!isEmailEditing || !isAvatarEditing || !isPasswordEditing) {
      setIsFormEdititng(false);
    }
  }

  function handleResetEmail() {
    setEmail(user.email);
    setIsEmailEditing(false);
    if (!isAvatarEditing || !isNameEditing || !isPasswordEditing) {
      setIsFormEdititng(false);
    }
  }

  async function onSubmit() {
    if (!avatar) {
      toast("Please! Add an avatar of you",{
        icon: '⚠',
      });
      return;
    }
    if (isAvatarEditing) setIsAvatarEditing(false);
    if (isNameEditing) setIsNameEditing(false);
    if (isEmailEditing) setIsEmailEditing(false);
    if (isPasswordEditing) isPasswordEditing(false);
    setIsFormEdititng(false);
  }

  return (
    <StyledProfileContainer>
      <StyledProfileForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <StyledAvatarConatiner>
          <StyledAvatarInput
            type="file"
            name="avatar"
            accept="image/*"
            onChange={handleAvatarChange}
            ref={avatarRef}
          />
          {isAvatarEditing &&
            <StyledAvatarButton 
              onClick={() => {
                if(avatar) {
                  handleClearAvatar();
                } else {
                  handleClickAvatar();
                }
              }}
            >
              {avatar ? <HiTrash /> : <HiCamera />}
            </StyledAvatarButton>
          }
          {!avatar ? 
            <StyledAvatarIconContainer>
              <HiUser />
            </StyledAvatarIconContainer> : 
            <StyledAvatarImg src={avatar} alt="Avatar" />
          }
        </StyledAvatarConatiner>
        {isAvatarEditing ? (
          avatar !== user?.avatar &&
            <StyledEditAvaterBtn
              onClick={handleResetAvatar}
            >
              <span>Restore Avatar</span>
              <HiOutlineRefresh />
            </StyledEditAvaterBtn>
          ) : (
          <StyledEditAvaterBtn
            onClick={handleStartAvatarEditing}
          >
            <span>Edit Avatar</span>
            <HiPencilAlt />
          </StyledEditAvaterBtn>
        )}

        <FormRowItem
          key="username input"
          label="Username"
          // error={errors?.name?.message}
        >
          <StyledInput
            id="usernameInput"
            type="text"
            placeholder="Enter your new username"
            name="name"
            value={username}
            disabled={!isNameEditing}
            onChange={handleNameChange}
          />
          {isNameEditing ?
            <StyledEditInputBtn
              onClick={handleResetName}
            >
              <HiOutlineRefresh />
            </StyledEditInputBtn> :
            <StyledEditInputBtn
              onClick={handleStartNameEditing}
            >
              <HiPencilAlt />
            </StyledEditInputBtn>
          }
        </FormRowItem>

        <FormRowItem
          key="email input"
          label="Email"
          // error={errors?.name?.message}
        >
          <StyledInput
            id="emailInput"
            type="email"
            placeholder="Enter your new email"
            name="name"
            value={email}
            disabled={!isEmailEditing}
            onChange={handleEmailChange}
          />
          {isEmailEditing ?
            <StyledEditInputBtn
              onClick={handleResetEmail}
            >
              <HiOutlineRefresh />
            </StyledEditInputBtn> :
            <StyledEditInputBtn
              onClick={handleStartEmailEditing}
            >
              <HiPencilAlt />
            </StyledEditInputBtn>
          }
        </FormRowItem>

        {isPasswordEditing ?
          <>
            <FormRowItem
              key="current password"
              label="Current Password"
              error={errors?.currentPassword?.message}
            >
              <StyledInput 
                id="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                placeholder="Enter Your current password"
                name="currentPassword"
                // disabled={isFormLoading}
                {...register("currentPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === user.password || "Passwords need to match",
                })}
              />
              <StyledTogglePasswordButton onClick={handleToggleCurrentPassword}>
                {showCurrentPassword ? <HiEyeOff /> : <HiEye />}
              </StyledTogglePasswordButton>
            </FormRowItem>

            <FormRowItem
              key="new password input"
              label="New password"
              error={errors?.newPassword?.message}
            >
              <StyledInput 
                id="newPasswordInput"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                name="newPassword"
                // disabled={isFormLoading}
                {...register("newPassword", { required: "This field is required" })}
              />
              <StyledTogglePasswordButton onClick={handleToggleNewPassword}>
                {showNewPassword ? <HiEyeOff /> : <HiEye />}
              </StyledTogglePasswordButton>
            </FormRowItem>
            
            <FormRowItem
              key="confirm password"
              label="Confirm Password"
              error={errors?.confirmPassword?.message}
            >
              <StyledInput 
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                name="confirmPassword"
                // disabled={isFormLoading}
                {...register("confirmPassword", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().newPassword || "Passwords need to match",
                })}
              />
              <StyledTogglePasswordButton onClick={handleToggleConfirmPassword}>
                {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
              </StyledTogglePasswordButton>
            </FormRowItem>
          </> :
          <StyledEditPasswordBtn
            onClick={handleStartPasswordEditing}
          >
            Edit password
            <HiPencilAlt />
          </StyledEditPasswordBtn>
        }

        {isFormEdititng &&
          <StyledButton
            type="submit"
          >
            Save
          </StyledButton>
        }
      </StyledProfileForm>
    </StyledProfileContainer>
  )
}

export default Profile