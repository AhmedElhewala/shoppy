import styled from "styled-components";
import ProfileForm from "../features/authentication/ProfileForm";

const StyledProfileContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 100px 40px;
  position: relative;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 767px) {
    width: calc(100% - 6rem);
  }
`

function Profile() {
  return (
    <StyledProfileContainer>
      <ProfileForm />
    </StyledProfileContainer>
  )
}

export default Profile