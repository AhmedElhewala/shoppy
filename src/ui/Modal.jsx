import styled from "styled-components"
import Overlay from "./Overlay"

const ModalWindow = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  &::-webkit-scrollbar-horizontal {
    height: 0;
  }
`

function Modal({children}) {
  return (
    <Overlay>
      <ModalWindow>
        {children}
      </ModalWindow>
    </Overlay>
  )
}

export default Modal