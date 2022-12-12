import { useContext, useState } from "react"

import LoginCard from "../../molecules/LoginCard"

import { Container } from "./style"

import { AuthContext } from "../../../contexts/AuthContext"
import { service } from "../../../api"

type Login = {
  email: string
  password: string
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleLogin(dataForm: Login) {
    setLoading(true)
    setErrorMessage('')

    try {
      const res = await signIn('/auth/login', dataForm)

      console.log(res)

    } catch (error: any) {
      console.log(error)

      setErrorMessage(error?.response.data.error_message)
      setLoading(false)

    }
  }

  return (
    <Container>
      <LoginCard 
        handleEnterSubmit={handleLogin}
        loading={loading}
        error_message={errorMessage}
      />
    </Container>
  )
}

export default Login