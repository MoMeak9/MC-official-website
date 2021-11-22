const mysql = require('mysql')
const dbOption = require('./config')

// 创建连接池
const pool = mysql.createPool(dbOption)


function query(sql, params) {
  return new Promise((resolve, reject) => {
    // 获取连接
    pool.getConnection((err, conn) => {
      if (err) {
        reject(err)
        return
      }
      // 执行sql语句
      conn.query(sql, params, (err, result) => {
        conn.release()
        if (err) {
          reject(err)
          return
        }
        resolve(result)
      })
    })
  })
}


module.exports = query
