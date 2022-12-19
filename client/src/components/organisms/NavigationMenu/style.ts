import styled from "styled-components";

import { Orange, White } from "../../../assets/styles/colors";
import { XXSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  .NavigationMenuTrigger {
    background: transparent;
    border: none;
    padding: 3px;
    cursor: pointer;

    i {
      color: ${White};
      font-size: 20px;
    }
  }

  .NavigationMenuContent {
    color: ${White};
    background: ${Orange};
    position: absolute;
    width: 100px;
    padding: 10px;
    border-radius: 7px;

    display: flex;
    flex-direction: column;

    button {
      ${XXSmallDisplay}
      color: ${White};
      background: transparent;
      border: none;
      padding: 3px;
      cursor: pointer;
      margin: 5px 0;
      border-radius: 7px;

      &:hover {
        color: ${Orange};
        background: ${White};
      }
    }
  }
`