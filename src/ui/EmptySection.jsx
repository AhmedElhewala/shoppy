import styled from "styled-components";

const StyledEmptySection = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
`

function EmptySection({children}) {
  return (
    <StyledEmptySection>
      {children}
    </StyledEmptySection>
  )
}

export default EmptySection