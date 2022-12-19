import styled from "styled-components";

import { Purple600, White } from "../../../assets/styles/colors";
import { SmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.header `
  background: ${Purple600};
  padding: 20px;
`

export const Title = styled.p `
  ${SmallDisplay}
  color: ${White};
`