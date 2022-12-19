import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'

import { service } from '../../index'

import { createUseUserKey } from './keys'
import { User } from './types'

export const useUser = (options?: AxiosRequestConfig) => {

  return useQuery<User>(
    createUseUserKey(),
    () => {
        return service.get<User>(`/user`, options)
        .then(res => {
          return res.data
        })
      }
  )
}