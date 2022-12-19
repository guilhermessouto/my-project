import { LabelText } from "./style"

type Props = {
  label: string
  color?: string | undefined
}

const Label = (props: Props) => {
  return (
    <LabelText color={props.color}>
      {props.label}
    </LabelText>
  )
}

export default Label