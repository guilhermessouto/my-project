import axios from "axios"
import { useState } from "react"

import { Post } from "../../../api"

import SignUpCard from "../../molecules/SignUpCard"

import { Container } from "./style"

type SignUp = {
  name: string
  email: string
  password: string
}

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSignUp(dataForm: SignUp) {
    setLoading(true)
    setErrorMessage('')
  
    try {
      const res = await Post('/auth/register', dataForm)
      console.log(res)

    } catch (error: any) {
      console.log(error)

      setErrorMessage(error?.response.data.error_message)
      setLoading(false)

    }
  }

  return (
    <Container>
      <SignUpCard 
        handleEnterSubmit={handleSignUp}
        loading={loading}
        error_message={errorMessage}
      />
    </Container>
  )
}

export default SignUp