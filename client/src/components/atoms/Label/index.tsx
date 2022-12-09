import { LabelText } from "./style"

type Props = {
  label: string
}

const Label = (props: Props) => {
  return (
    <LabelText>
      {props.label}
    </LabelText>
  )
}

export default Label