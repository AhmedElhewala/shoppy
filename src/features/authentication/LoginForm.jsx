import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useLogin from "./useLogin";
import Spinner from "../../ui/Spinner"
import { useNavigate } from 'react-router-dom';

import FormRowItem from "../../ui/FormRowItem";
import { Link } from "react-router-dom";
import { HiEye, HiEyeOff } from "react-icons/hi";

const StyledForm = styled.form`
  width: 100%;
  background-color: var(--color-grey-200);
  box-shadow: 0 0 8px 1px var(--color-grey-500);
  padding: 40px 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: var(--main-transition);
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

const RemmberUserContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  >* {
    cursor: pointer;
  }

  >input {
    width: 1.2rem;
    height: 1.2rem;
  }
  
  >label {
    font-size: 1.4rem;
    color: var(--color-grey-700);
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

function LoginForm() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { login } = useLogin();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const navigate = useNavigate();

  function handleTogglePassword() {
    setShowPassword(show => !show)
  }

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  function onSubmit({email, password}) {
    setIsFormLoading(true);

    login(
      {email, password, isRemmbered: isChecked}, 
      {onSettled: () => {
        setIsFormLoading(false);
      }},
      {onSuccess: () => {
        navigate("/", { replace: true });
      }}
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
      {isFormLoading && <Spinner />}
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
      <RemmberUserContainer>
        <input 
          type="checkbox"
          name="remmber"
          id="remmberUser"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="remmberUser">Remmber me?</label>
      </RemmberUserContainer>
      <StyledButton disabled={isFormLoading}>Log in</StyledButton>
      <StyledLink to="/auth/register">Create New Account</StyledLink>
    </StyledForm>
  )
}

export default LoginForm