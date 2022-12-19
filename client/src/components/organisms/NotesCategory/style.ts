import styled from "styled-components";

import { Orange, White } from "../../../assets/styles/colors";
import { XXSmallDisplay } from "../../../assets/styles/typography";

export const ArrowContainer = styled.div `
  width: 100%;
`

export const Arrow = styled.div `
  width: 40px;
  height: 40px;
  background: ${Orange};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;

  i {
    color: ${White};
    font-size: 25px;
  }
`