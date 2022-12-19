import styled from 'styled-components';

import { Orange } from '../../../assets/styles/colors';

type Props = {
  selected: boolean
}

export const Container = styled.ul`
  margin-top: 20px;
`

export const Item = styled.li`
  position: relative;
  margin-bottom: 10px;
  width: 100%;

  ${(props: Props) => props.selected && `
    border-right: 3px solid ${Orange};
  `}
`
