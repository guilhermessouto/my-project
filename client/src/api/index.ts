import axios, { AxiosRequestConfig } from "axios"

const service = axios.create({
  baseURL: 'http://localhost:3000'
})

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