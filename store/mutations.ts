interface stepType {
  type: string
  message: string,
  light: boolean,
}

export default {
  message(state: any, step: stepType) {
    state.msgPool.push(step)
    // 将消息添加到消息列表
  },
  increment(state: any) {
    state.counter = 2
  },
  popMessage(state: any) {
    state.msgPool.shift()
  }
}
