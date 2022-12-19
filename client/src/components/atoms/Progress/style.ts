import styled from "styled-components";

import { Green600, Green900, White } from "../../../assets/styles/colors";
import { XXSmallDisplay } from "../../../assets/styles/typography";

type Props = {
  closeProgress: boolean
}

export const Container = styled.div `
  ${({ closeProgress }: Props) => closeProgress ? 'display: none;' : ''}

  .ProgressRoot {
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background: ${Green900};
    width: 100%;
    height: 50px;

    transform: translateZ(0);
  }

  .ProgressIndicator {
    background-color: ${Green600};
    width: 100%;
    height: 5px;
    transition: transform 1.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  .ProgressLabelContainer {
    height: 89%;
    display: flex;
    align-items: center;
    margin-left: 25px;
    color: ${White};
    ${XXSmallDisplay}
  }
`