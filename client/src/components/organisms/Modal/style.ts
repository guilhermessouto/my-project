import styled from "styled-components";

type Props = {
  closeModal: boolean
}

export const Container = styled.div `
  ${({ closeModal }: Props) => closeModal ? 'display: none;': ''}

  .DialogContent {
    backdrop-filter: blur(2.5px);
    border-radius: 6px;
    position: fixed;
    top: 0;
    right: 0;

    &:focus {
      outline: none;
    }
  }
`

export const ContentSubContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .bx {
    color: #fff;
    background: #fff;
  }
`