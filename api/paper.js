import request from '@/utils/requires'

export const api = {
  submitPaper: "/api/paper/submitPaper",
}

export function submitPaper(param) {
  return request({
    url: api.submitPaper,
    method: 'post',
    data: param
  })
}
