import { parseCookies } from "nookies"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../../contexts/AuthContext"
import SignUpCard from "../../molecules/SignUpCard"

import { Container } from "./style"

type SignUp = {
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn } = useContext(AuthContext)

  useEffect(() => {
    const { 'myproject-token': token } = parseCookies()

    if(token)
      return navigate('/home')
  }, [])

  async function handleSignUp(dataForm: SignUp) {
    setLoading(true)
    setErrorMessage('')
  
    try {
      await signIn('/auth/register', dataForm)

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