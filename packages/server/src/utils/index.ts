const { createHash } = require('crypto');
const fs = require('fs');
const { extname, join } = require('path');
const multer = require('multer');

export function md5(s: string) {
  // 注意参数需要为string类型，否则会报错
  return createHash('md5').update(String(s)).digest('hex');
}
