import styled from "styled-components";

import { Blue, Error, Gray900, Orange, Purple, Purple600, Purple900, White } from "../../../assets/styles/colors";
import { XXSmallDisplay, XXXSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  background: ${Purple600};
  box-shadow: 0 0 10px 5px ${Blue};
  width: 350px;
  padding: 10px;
  margin: 0 10px;

  form {
    display: flex;
    flex-direction: column;
  }

  button:focus {
    color: ${Orange};
    background: ${White};
  }
`

export const FieldContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  input {
    padding: 10px;
    outline: none;
    border: none;
    
    &::placeholder {
      color: ${Gray900};
      font-size: 1.05em;
    }

    &:focus {
      box-shadow: 0 0 0 3px ${Blue};
    }
  }
  
  textarea {
    padding: 10px;
    height: 125px;
    border: none;
    outline: none;
    ${XXXSmallDisplay}

    &:focus {
      box-shadow: 0 0 0 3px ${Blue};
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