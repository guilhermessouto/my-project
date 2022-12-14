import Loader from "../Loader";

import { StyledButton, SpanLabel } from './style'

type Props = {
  label: string
  loading?: boolean
  background?: string
  themeLoader?: string
}

const SubmitButton = (props: Props) => {
  return (
    <StyledButton
      type="submit"
      background={props.background}
    >
      {props.loading 
        ? <Loader theme={props.themeLoader}/>
        : <SpanLabel>{props.label}</SpanLabel>
      }
    </StyledButton>
  )
}

export default SubmitButton