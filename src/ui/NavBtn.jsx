import { HiOutlineChevronRight } from "react-icons/hi";
import styled from "styled-components";

const StyledNavBtn = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  left: 4.5rem;
  font-weight: bold;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  box-shadow: 0 0 4px 1px var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--main-transition);
  z-index: 99999999999;

  &.open {
    left: 24.5rem;
    > svg {
      transform: rotate(180deg);
    }
  }

  > svg {
    font-size: 1.6rem;
    transition: var(--main-transition);
  }
`;
function NavBtn({ toggleOpenAside, isAsideOpen }) {
  return (
    <StyledNavBtn
      onClick={toggleOpenAside}
      className={isAsideOpen ? "open" : ""}
    >
      <HiOutlineChevronRight />
    </StyledNavBtn>
  );
}

export default NavBtn;
