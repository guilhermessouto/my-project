import styled from "styled-components";

import { Purple600, White } from "../../../assets/styles/colors";
import { ContainerElevation } from "../../../assets/styles/elevations";
import { XXSmallDisplay } from "../../../assets/styles/typography";

export const ToolTip = styled.span `
  position: absolute;
  top: 0;
  left: 75px;
  transform: translateY(-50%);
  width: 150px;
  ${XXSmallDisplay}
  text-align: center;
  border-radius: 6px;
  background: ${White};
  text-align: center;
  transition: 0s;
  ${ContainerElevation}
  opacity: 0;
  display: none;
`

export const Container = styled.div `
  color: ${White};
  border-radius: 7px;
  cursor: pointer;
  padding: 10px 0;

  &:hover {
    color: ${Purple600};
    background: ${White};
  }

  &:hover ${ToolTip} {
    transition: all .3s ease;
    top: 50%;
    opacity: 1;
  }
`

export const SubContainer = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
`

export const Icon = styled.i `
  font-size: 20px;
  min-width: 50px;
  border-radius: 12px;
  text-align: center;
`

export const Span = styled.span `
  ${XXSmallDisplay}
`

