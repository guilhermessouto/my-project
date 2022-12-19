import styled from "styled-components";
import { Blue, Orange, Purple600, White } from "../../../assets/styles/colors";
import { SmallDisplay, XXSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  .DialogContent {
    backdrop-filter: blur(2.5px);
    border-radius: 6px;
    position: fixed;
    top: 0;
    right: 0;
  }

  &:focus {
    outline: none;
  }
`

export const ContentSubContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .content {
    background: ${Purple600};
    box-shadow: 0 0 10px 5px ${Blue};
    width: 450px;
    padding: 10px;
    margin: 0 10px;

    p {
      ${SmallDisplay}
      color: ${White};
      text-align: center;
      margin-bottom: 10px;
    }

  }
`

export const ButtonsContainer = styled.div `
  display: flex;
  align-items: center;

  .cancel {
    width: 100%;
    margin-right: 10px;
    padding: 8px 0;
    cursor: pointer;
    color: ${White};
    text-align: center;
    ${XXSmallDisplay}
    background: ${Blue};
  }
`