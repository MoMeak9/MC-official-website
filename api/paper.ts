import { AxiosPromise } from 'axios'
import request from '@/utils/requires'

export const api = {
  submitPaper: '/api/paper/submitPaper'
}

export function submitPaper(param: object): AxiosPromise {
  return request({
    url: api.submitPaper,
    method: 'post',
    data: param
  })
}
