import styled from "styled-components";

import { Gray900 } from "../../../assets/styles/colors";
import { XSmallDisplay } from "../../../assets/styles/typography";

type Props = {
  color: string | undefined
}

export const LabelText = styled.label `
  margin-bottom: 7px;
  color: ${({ color }: Props) => color ? color : Gray900};
  font-weight: bolder;
  font-size: ${XSmallDisplay};
`