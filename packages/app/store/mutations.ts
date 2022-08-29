import storage from 'store2';
interface IStepType {
  type: string;
  message: string;
  light: boolean;
}

export default {
  message(state: any, step: IStepType) {
    state.msgPool.push(step);
    // 将消息添加到消息列表
  },
  popMessage(state: any) {
    state.msgPool.shift();
  },
  setToken: (state: any, token: string) => {
    state.token = token;
    storage.set('token', token);
  },
  setUserInfo: (state: any, userInfo: any) => {
    state.userInfo = userInfo;
  },
  signOut(state: any) {
    state.userInfo = '';
  },
};
