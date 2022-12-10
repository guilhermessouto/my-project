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
      // const res = await Post('/auth/login', dataForm)
      
      // console.log(res)

      // const data = await axios.get('http://localhost:3000/user/639358221b8692db5b389b0a', {
      //   headers: {
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTM1ODIyMWI4NjkyZGI1YjM4OWIwYSIsImlhdCI6MTY3MDYwNDg3MH0.tr8CV0hf6yPATD10V66B8F1ZmyfS3HCj0Iy_RMAFr-Q'
      //   }
      // })
      // console.log(data)

      const cookies = document.cookie
      console.log(cookies)

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