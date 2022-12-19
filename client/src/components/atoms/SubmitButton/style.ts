import styled from "styled-components";

import { Gray900, Orange, Purple, White } from "../../../assets/styles/colors";
import { XXSmallDisplay } from "../../../assets/styles/typography";

type Props = {
  background?: string
}

export const StyledButton = styled.button `
  width: 100%;
  margin: 3px 0;
  color: ${White};
  font-weight: bolder;
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ background }: Props) => 
    background === 'orange' ? `${Orange}`
    : background === 'purple' ? `${Purple}`
    : `${Gray900}`
  };
`

export const SpanLabel = styled.span `
  ${XXSmallDisplay}
  padding: 8px;
`