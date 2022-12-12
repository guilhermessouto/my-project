import { parseCookies } from "nookies"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../../contexts/AuthContext"

const HomeTemplate = () => {
  const navigate = useNavigate()

  const { userData } = useContext(AuthContext)
  
  useEffect(() => {
    const { 'myproject-token': token } = parseCookies()

    if(!token)
      return navigate('/login')

  }, [])

 

  return (
    <div>
      {userData?.email}
    </div>
  )
}

export default HomeTemplate