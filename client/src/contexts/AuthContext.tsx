import { AxiosResponse } from "axios";
import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from 'nookies'
import { useNavigate } from "react-router-dom";

import { service } from "../api";

import { useUser } from "../api/services/user";

type User = {
  email: string
  _id: string
}

type SignInData = {
  email: string
  password: string
}

type SignInRequestData = {
  token: string
  user: User
}

type AuthContextType = {
  isAuthenticated: boolean
  userData: User | undefined
  signIn: (param: string, data: SignInData) => Promise<AxiosResponse<SignInRequestData>>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const navigate = useNavigate()

  const [userData, setUserData] = useState<User | undefined>(undefined)
  const [loadData, setLoadData] = useState('')

  // verificar se o usuário está autenticado
  const isAuthenticated = !!userData

  // mesmo que o token continue salvo no refresh da pagina, a 
  // informaçao do usuario que esta no state nao persiste, 
  // porq a informaçao é local.
  // entao é melhor utilizar o useEffect.
  // a logica é verificar se tem um token nos cookies, se tiver é porq
  // o usuario ta autenticado, entao eu busco no back-end as infos
  // do usuario atualizados
  useEffect(() => {
    const { 'myproject-token': token } = parseCookies()

    if(token) {
      service.get('/user')
        .then(res => setUserData(res.data))
    }
    
  }, [])

  // funçao de autenticaçao
  async function signIn(param: string, dataForm: SignInData) {
    const res = await service.post<SignInRequestData>(param, dataForm)

    const { token, user } = res.data

    setCookie(undefined, 'myproject-token', token, {
      maxAge: 60 * 60 * 5, // 5 horas
    })

    setUserData(user)

    navigate('/home')

    return res
  }

  return (
    <AuthContext.Provider value={{ userData, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}