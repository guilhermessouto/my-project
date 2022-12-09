import { Error } from "./style"

type Props = {
  message: string | undefined
}

const ErrorMessageForm = (props: Props) => {
  return (
    <Error>
      {props.message}
    </Error>
  )
}

export default ErrorMessageForm