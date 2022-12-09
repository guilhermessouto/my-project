import axios from "axios"
import { useState } from "react"

import { Post } from "../../../api"

import LoginCard from "../../molecules/LoginCard"

import { Container } from "./style"

type Login = {
  email: string
  password: string
}

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleLogin(dataForm: Login) {
    setLoading(true)
    setErrorMessage('')

    try {
      const res = await Post('/auth/login', dataForm)
      
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