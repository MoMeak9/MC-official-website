import storage from "store2";
import { getUserInfo, login } from "@/api/user";

export default {
  Logout({ commit }: any) {
    return new Promise(resolve => {
      commit("signOut");
      storage.remove("token");
      resolve(resolve);
    });
  },
  getUserInfo({ commit }: any) {
    const token = storage.get("token");
    if (token == null || token === "") return false;
    return new Promise((resolve, reject) => {
      getUserInfo({})
        .then(res => {
          commit("setUserInfo", res.data.userBean);
          resolve(res);
        })
        .catch(err => {
          commit("Logout");
          storage.remove("token");
          reject(err);
        });
    });
  },
  Login({ commit }: any, userInfo: any) {
    return new Promise((resolve, reject) => {
      try {
        login(userInfo)
          .then(res => {
            commit("setToken", res.data.token);
            commit("setUserInfo", res.data.userBean);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      } catch (error) {
        reject(error);
      }
    });
  },
};

