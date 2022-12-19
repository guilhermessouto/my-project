import styled from "styled-components";
import { Purple600, White } from "../../../assets/styles/colors";
import { XSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  width: 250px;
  background: ${Purple600};
  border-radius: 10px;
  margin: 7px;

  p {
    color: ${White};
    ${XSmallDisplay}
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    padding: 15px;
    cursor: pointer;
  }
`