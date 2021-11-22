/**
 * Created by Yihui_Shi on 2021/8/7 12:46
 */
import request from '@/utils/requires'

export const api = {
    login: "/api/user/login",
    register: "/api/user/register",
    getUserInfo: "/api/user/getUserInfo",
    uploadImage: "/api/user/uploadImage",
    updateUser: "/api/user/updateUser"
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

export function uploadImage(param) {
    return request({
        url: api.uploadImage,
        method: 'post',
        data: param,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}

export function updateUser(param) {
    return request({
        url: api.updateUser,
        method: 'post',
        data: param,
    })
}
