import styled from "styled-components";
import { HiHeart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useThemeMode } from "../context/ThemeContext";
import logoLightPath from "/logo-light.png";
import logoDarkPath from "/logo-dark.png";
import { FaGooglePlusG, FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const StyledFooter = styled.footer`
  padding: 4rem 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  box-shadow: 8px 0 4px 2px var(--color-grey-500);
  transition: var(--main-transition);
`

const StyledFooterLogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-weight: bold;
  color: var(--color-grey-900);
  position: relative;

  >span {
    display: inline-block;
    font-size: 2.2rem;
  }
`

const StyledFooterLogo = styled.img`
  display: block;
  max-width: 2.6rem;
  transition: var(--main-transition);
  filter: drop-shadow(0 1px 2px var(--color-grey-500));
`

const StyledFeedbackContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
`

const StyledFeedbackTextarea = styled.textarea`
  width: 40%;
  min-height: 10rem;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px var(--color-grey-500);
  background-color: #efefef;
  color: #000;
  border: none;
  outline: none;
  resize: none;
  transition: var(--main-transition);
  
  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }

  &:focus {
    box-shadow: 0 0 6px 1px var(--color-grey-500);
  }
`

const StyledFeedbackBtn = styled.button`
  width: 40%;
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

  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`

const StyledSocialLinksContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  transition: var(--main-transition);

  @media screen and (max-width: 767px) {
    gap: 2rem;
  }
`

const StyledSocialLink = styled(Link)`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  color: #efefef;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--main-transition);

  &.google {
    background-color: #db4437;
    box-shadow: 0 0 4px 2px #db4437;
  }

  &.facebook {
    background-color: #1877f2;
    box-shadow: 0 0 4px 2px #1877f2;
  }

  &.twitter {
    background-color: #1da1f2;
    box-shadow: 0 0 4px 2px #1da1f2;
  }

  &.whatsapp {
    background-color: #25d366;
    box-shadow: 0 0 4px 2px #25d366;
  }

  &.instagram {
    background-color: #c32aa3;
    box-shadow: 0 0 4px 2px #c32aa3;
  }

  &:hover {
    transform: scale(1.1);
  }

  >svg {
    font-size: 2.2rem;
  }
`

const StyledCopyright = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: var(--color-grey-400);
    position: absolute;
    top: -1.5rem;
    left: 0;
  }

  >svg {
    color: var(--color-btn-red);
  }
`

function Footer() {
  const {isDark} = useThemeMode();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <StyledFooter>
      <StyledFooterLogoContainer>
        <StyledFooterLogo 
          src={isDark ? logoDarkPath : logoLightPath}
          alt="Shoopy Logo"
        />
        <span>Shoppy</span>
      </StyledFooterLogoContainer>

      <StyledFeedbackContainer onSubmit={handleSubmit}>
        <StyledFeedbackTextarea 
          name="feedback"
          placeholder="Please! Let us know your feedback..."
        />
        <StyledFeedbackBtn type="submit">
          Send
        </StyledFeedbackBtn>
      </StyledFeedbackContainer>

      <StyledSocialLinksContainer>
        <StyledSocialLink
          key="google"
          className="google"
        >
          <FaGooglePlusG />
        </StyledSocialLink>
        <StyledSocialLink
          key="facebook"
          className="facebook"
        >
          <FaFacebookF />
        </StyledSocialLink>
        <StyledSocialLink
          key="twitter"
          className="twitter"
        >
          <FaXTwitter />
        </StyledSocialLink>
        <StyledSocialLink
          key="instagram"
          className="instagram"
        >
          <FaInstagram />
        </StyledSocialLink>
        <StyledSocialLink
          key="whatsapp"
          className="whatsapp"
        >
          <FaWhatsapp />
        </StyledSocialLink>
      </StyledSocialLinksContainer>

      <StyledCopyright>
        Copyright &copy; 2024, Shoppy. Made with <HiHeart />
      </StyledCopyright>
    </StyledFooter>
  )
}

export default Footer