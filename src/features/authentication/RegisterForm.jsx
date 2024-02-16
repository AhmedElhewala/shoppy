import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import FormRowItem from "../../ui/FormRowItem";
import { Link } from "react-router-dom";
import { HiCamera, HiEye, HiEyeOff, HiTrash, HiUser } from "react-icons/hi";
import useRegister from "./useRegister";
import axios  from "axios";
import { IMGBB_API_KEY } from "../../utilities/constants";
import toast from "react-hot-toast";
import Spinner from "../../ui/Spinner";

const StyledForm = styled.form`
  width: 100%;
  margin-top: 20px;
  background-color: var(--color-grey-300);
  box-shadow: 0 0 8px 2px var(--color-grey-500);
  padding: 70px 20px 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: var(--main-transition);
  position: relative;
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

const StyledInput = styled.input`
  flex-basis: 80%;
  padding: 8px 12px;
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

const StyledLink = styled(Link)`
  width: 100%;
  margin-top: 2rem;
  padding: 8px 12px;
  border-radius: 8px;
  transition: var(--main-transition);
  background-color: var(--color-grey-700);
  color: var(--color-grey-100);
  box-shadow: var(--color-grey-500) 0px 50px 100px -20px, var(--color-grey-500) 0px 30px 60px -30px, var(--color-grey-500) 0px -2px 6px 0px inset;;
  transition: var(--main-transition);
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 80%;
    height: 1px;
    border-radius: 2px;
    background-color: var(--color-grey-500);
    position: absolute;
    top: -2.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`

function RegisterForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const [avatar, setAvatar] = useState("");
  const avatarRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {register: registerApi} = useRegister();
  const [isFormLoading, setIsFormLoading] = useState(false);

  function handleTogglePassword() {
    setShowPassword(show => !show)
  }

  function handleToggleConfirmPassword() {
    setShowConfirmPassword(show => !show)
  }

  function handleClickAvatar() {
    if (avatarRef && avatarRef.current) avatarRef.current.click();
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

  function handleClearAvatar() {
    setAvatar("");
  }

  async function onSubmit({name, email, password}) {
    if (!avatar) {
      toast("Please! Add an avatar of you",{
        icon: '⚠',
      });
      return;
    }
    setIsFormLoading(true);

    registerApi(
      {name, email, password, avatar},
      {onSettled: () => setIsFormLoading(false)}
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      {isFormLoading && <Spinner />}
      <StyledAvatarConatiner>
        <StyledAvatarInput
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleAvatarChange}
          ref={avatarRef}
        />
        {!isFormLoading && 
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
            <HiUser/>
          </StyledAvatarIconContainer> : 
          <StyledAvatarImg src={avatar} alt="Avatar" />
        }
      </StyledAvatarConatiner>

      <FormRowItem
        key="username input"
        label="Username"
        error={errors?.name?.message}
      >
        <StyledInput
          id="usernameInput"
          type="text"
          placeholder="Enter your username"
          name="name"
          disabled={isFormLoading}
          {...register("name", { required: "This field is required" })}
        />
      </FormRowItem>

      <FormRowItem
        key="email input"
        label="Email"
        error={errors?.email?.message}
      >
        <StyledInput
          id="emailInput"
          type="email"
          placeholder="Enter your email"
          name="email"
          disabled={isFormLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowItem>

      <FormRowItem
        key="password input"
        label="Password"
        error={errors?.password?.message}
      >
        <StyledInput 
          id="passwordInput"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          name="password"
          disabled={isFormLoading}
          {...register("password", { required: "This field is required" })}
        />
        <StyledTogglePasswordButton onClick={handleTogglePassword}>
          {showPassword ? <HiEyeOff /> : <HiEye />}
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
          placeholder="Confirm your password"
          name="confirmPassword"
          disabled={isFormLoading}
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
        <StyledTogglePasswordButton onClick={handleToggleConfirmPassword}>
          {showConfirmPassword ? <HiEyeOff /> : <HiEye />}
        </StyledTogglePasswordButton>
      </FormRowItem>

      <StyledButton disabled={isFormLoading}>Sign up</StyledButton>
      <StyledLink to="/auth/login">Log in with an existing account</StyledLink>
    </StyledForm>
  )
}

export default RegisterForm