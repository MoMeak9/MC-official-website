interface dataType {
  type?: string
  message?: string,
  light?: boolean,
  time?: number
}

export default {
  success($store: any, data: dataType) {
    $store.commit('message', {
      type: 'success',
      message: data.message ? data.message : data,
      light: data.light ? data.light : false
    })
    setTimeout(() => {
      $store.commit('popMessage')
    }, data.time ? data.time : 5000)
  },
  // 错误提示
  error($store: any, data: dataType) {
    $store.commit('message', {
      type: 'error',
      message: data.message ? data.message : data,
      light: data.light ? data.light : false
    })
    setTimeout(() => {
      $store.commit('popMessage')
    }, data.time ? data.time : 5000)
  },
  // 消息提示
  info($store: any, data: dataType) {
    $store.commit('message', {
      type: 'info',
      message: data.message ? data.message : data,
      light: data.light ? data.light : false
    })
    setTimeout(() => {
      $store.commit('popMessage')
    }, data.time ? data.time : 5000)
  },

  // 警告提示
  warning($store: any, data: dataType) {
    $store.commit('message', {
      type: 'warning',
      message: data.message ? data.message : data,
      light: data.light ? data.light : false
    })
    setTimeout(() => {
      $store.commit('popMessage')
    }, data.time ? data.time : 5000)
  }
}
