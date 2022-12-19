import styled from "styled-components";

import {  Orange, Purple600, White } from "../../../assets/styles/colors";
import { mobile } from "../../../assets/styles/medias";
import { SmallDisplay, XXSmallDisplay, XXXSmallDisplay } from "../../../assets/styles/typography";

export const Container = styled.div `
  width: 300px;
  height: 200px;
  margin: 7px;
  padding: 10px;
  background: ${Purple600};
  border-radius: 7px;
  
  @media ${mobile} {
    width: 100%;
  }
`

export const TopHeader = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
`

export const Category = styled.p `
  color: ${White};
  ${XXSmallDisplay}
`

export const Title = styled.h1 `
  ${SmallDisplay}
  color: ${White};
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  white-space: normal;
`

export const Line = styled.div `
  width: 100%;
  height: 2px;
  margin: 10px 0;
  background: ${Orange};
`

export const Text = styled.p `
  ${XXXSmallDisplay}
  color: ${White};
  line-height: 20px;
  text-overflow:ellipsis;
  overflow:hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  white-space: normal;
`