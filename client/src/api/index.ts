import axios, { AxiosRequestConfig } from "axios"
import { parseCookies } from "nookies"

const { 'myproject-token': token } = parseCookies()

export const service = axios.create({
  baseURL: 'http://localhost:3000'
})

if(token) {
  service.defaults.headers['Authorization'] = `Bearer ${token}`
}

export function Get(param: string, options?: AxiosRequestConfig) {
  return service.get(`${param}`, options)
}

export function Post(param: string, data: any, options?: AxiosRequestConfig) {
  return service.post(`${param}`, data, options)
}

export function Put(param: string, data: any, options?: AxiosRequestConfig) {
  return service.put(`${param}`, data, options)
}

export function Delete(param: string, options?: AxiosRequestConfig) {
  return service.delete(`${param}`, options)
}