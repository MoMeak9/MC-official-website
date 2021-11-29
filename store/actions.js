import storage from 'store'
import {getUserInfo} from '@/api/user'

export default {
  Logout({commit}) {
    return new Promise((resolve) => {
      commit('signOut')
      storage.remove('token')
      resolve()
    })
  },
  getUserInfo({commit}) {
    return new Promise((resolve, reject) => {
      try {
        getUserInfo({}).then(res => {
          if (res) {
            commit('setUserInfo', res.data.userBean)
            resolve(res)
          } else {
            commit('Logout')
            storage.remove('token')
          }
        }).catch((err) => {
          reject(err)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
