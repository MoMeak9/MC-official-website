const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const multer = require('multer')

function md5(s) {
  // 注意参数需要为string类型，否则会报错
  return crypto.createHash('md5').update(String(s)).digest('hex');
}

let upload = multer({
  storage: multer.diskStorage({
    // 设置文件存储位置
    destination: function (req, file, cb) {
      let date = new Date()
      let year = date.getFullYear()
      let month = (date.getMonth() + 1).toString().padStart(2, '0')
      let day = date.getDate()
      let dir = path.join(__dirname, '../public/uploads/' + year + month + day)

      // 判断目录是否存在，没有则创建
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true})
      }

      // dir就是上传文件存放的目录
      cb(null, dir)
    },
    // 设置文件名称
    filename: function (req, file, cb) {
      let fileName = Date.now() + path.extname(file.originalname)
      // fileName就是上传文件的文件名
      cb(null, fileName)
    }
  })
})

module.exports = {
  md5,
  upload
}
