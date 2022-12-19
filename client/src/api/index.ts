import axios from "axios"
import { parseCookies } from "nookies"

const { 'myproject-token': token } = parseCookies()

export const service = axios.create({
  baseURL: 'http://localhost:3000'
})

if(token) {
  service.defaults.headers['Authorization'] = `Bearer ${token}`
}
// context pras notes pra renderizar na merda do edit