import styled from "styled-components";
import { Purple900 } from "../../../assets/styles/colors";

import { mobile } from "../../../assets/styles/medias";

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  display: flex;
`

export const TabsContainer = styled.div `

`

export const TabsSelectorContainer = styled.div`
 
`

export const TabsViewContainer = styled.div`
  width: 100%;
  background: ${Purple900};
`

export const TabsViewSubContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 25px;

  @media ${mobile} {
    padding: 10px;
  }
`