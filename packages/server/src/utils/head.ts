module.exports = {
  success(msg?: string, data?: object) {
    return {
      head: {
        code: 1,
        msg: msg ? msg : '操作成功',
      },
      data,
    };
  },
  error(msg?: string, data?: object) {
    return {
      head: {
        code: -1,
        msg: msg ? msg : '系统异常',
      },
      data,
    };
  },
};
