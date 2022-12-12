import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { parseCookies } from "nookies"

import { AuthContext } from "../../../contexts/AuthContext"
import SignInCard from "../../molecules/SignInCard"

import { Container } from "./style"

type SignIn = {
  email: string
  password: string
}

const SignIn = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn } = useContext(AuthContext)

  useEffect(() => {
    const { 'myproject-token': token } = parseCookies()

    if(token) 
      return navigate('/home')

  }, [])

  async function handleSignIn(dataForm: SignIn) {
    setLoading(true)
    setErrorMessage('')

    try {
      const res =  await signIn('/auth/login', dataForm)

    } catch (error: any) {
      console.log(error)

      setErrorMessage(error?.response.data.error_message)
      setLoading(false)

    }
  }

  return (
    <Container>
      <SignInCard 
        handleEnterSubmit={handleSignIn}
        loading={loading}
        error_message={errorMessage}
      />
    </Container>
  )
}

export default SignIn