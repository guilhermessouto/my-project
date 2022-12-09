import styled from "styled-components";

type Props = {
  size: string
}

export const LoaderIMG = styled.img `
  ${(props: Props) => 
    props.size === 'large' ? `
      width: 64px;
      height: 64px;
    ` : `
      width: 34px;
      height: 34px;
    `
  }
  user-select: none;
  pointer-events: none;
`