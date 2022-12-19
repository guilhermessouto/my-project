import styled from "styled-components";

import { Orange, Purple600, White } from "../../../assets/styles/colors";
import { tablet } from "../../../assets/styles/medias";
import { SmallDisplay, XXSmallDisplay} from "../../../assets/styles/typography";
import { ToolTip, Container } from "../../atoms/TabsItemLabel/style";
import { Span } from "../../atoms/TabsItemLabel/style";

type Props = {
  isMenuOpen: boolean
}

export const AddNewNote= styled.button `
  background: ${Orange};
  color: ${White};
  ${XXSmallDisplay}
  padding: 8px;
  border-radius: 7px;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: ${Orange};
    background: ${White};
  }

  i {
    font-size: 25px;
  }
`

export const Logo = styled.div `
  color: ${White};
  display: flex;
  align-items: center;
  height: 50px;
  opacity: 0;
  pointer-events: none;

  i {
    font-size: 28px;
    margin-right: 5px;
  }
`

export const Button = styled.button `
  color: ${White};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 25px;
  width: 50px;
  height: 50px;
  text-align: center;
  line-hright: 50px;
`

export const Sidebar = styled.div`
  background: ${Purple600};
  padding: 6px 14px;
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  max-height: 100%;

  ${({isMenuOpen}: Props) => 
    isMenuOpen ? `
      width: 280px;

      & ${Logo} {
        opacity: 1;
      }
      
      @media ${tablet} {
        height: 100vh;
        position: absolute;
      }

    ` : `
      width: 78px;

      ${Button} {
        position: absolute;
      }

      ${Span} {
        display: none;
      }

      &:hover ${Container} {
        ${ToolTip} {
          display: block;
        }
      }
    `

  }
  
  @media ${tablet} {
    ${(props: Props) => props.isMenuOpen = false}
  }
`

export const LogoContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoName = styled.div `
  ${SmallDisplay}
`

