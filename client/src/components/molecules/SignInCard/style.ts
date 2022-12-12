import styled from "styled-components";

import { Gray900 } from "../../../assets/styles/colors";

export const Container = styled.div `
  padding: 15px;
  width: 365px;
  border: 1px solid #222;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const FieldContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 5px 0;

  input {
    padding: 10px;
    outline: none;
    border: 1.9px solid black;
    
    &::placeholder {
      color: ${Gray900};
      font-size: 1.05em;
    }
  }
`