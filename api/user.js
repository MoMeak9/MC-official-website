import request from '@/utils/requires'

export const api = {
  login: "/api/user/login",
  register: "/api/user/register",
  getUserInfo: "/api/user/getUserInfo",
  sendCode: "/api/user/sendCode",
  getAllUsers: "/api/user/getAllUsers"
}

export function login(param) {
  return request({
    url: api.login,
    method: 'post',
    data: param
  })
}

export function register(param) {
  return request({
    url: api.register,
    method: 'post',
    data: param
  })
}

export function getUserInfo(param) {
  return request({
    url: api.getUserInfo,
    method: 'get',
    data: param,
  })
}

export function sendCode(param) {
  return request({
    url: api.sendCode,
    method: 'post',
    data: param,
  })
}

export function getAllUsers() {
  return request({
    url: api.getAllUsers,
    method: 'get',
  })
}

