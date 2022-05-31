import storage from "store";
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
    return new Promise((resolve, reject) => {
      try {
        getUserInfo({})
          .then(res => {
            if (res) {
              commit("setUserInfo", res.data.userBean);
              resolve(res);
            } else {
              commit("Logout");
              storage.remove("token");
            }
          })
          .catch(err => {
            reject(err);
          });
      } catch (error) {
        reject(error);
      }
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

