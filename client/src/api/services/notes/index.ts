import { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query'

import { service } from '../../index'

import { createUseUserKey } from './keys'
import { Note } from './types'

export const useNotes = (options?: AxiosRequestConfig) => {

  return useQuery<Note>(
    createUseUserKey(),
    () => {
        return service.get<Note>(`/notes`, options)
        .then(res => {
          return res.data
        })
      }
  )
}