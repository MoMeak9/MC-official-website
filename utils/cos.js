// import moment from 'moment'
import { credential } from '@/api/common'
const COS = require('cos-js-sdk-v5')
export const uploadFileOrPic = async (file, fileName, callBackUp) => {
  const res = await credential({ bucketKey: 'gas_bucket' })
  const { tmpSecretId, tmpSecretKey, sessionToken, bucketName, region, expiredTime } = res.result
  const cos = new COS({
    // 必选参数
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getAuthorization: (options, callback) => {
      const obj = {
        TmpSecretId: tmpSecretId,
        TmpSecretKey: tmpSecretKey,
        XCosSecurityToken: sessionToken,
        // StartTime: data.startTime, // 开始时间戳，单位秒
        ExpiredTime: expiredTime // 过期时间戳，单位秒
      }
      callback(obj)
    }
  })
  // 上传图片
  return new Promise((resolve, reject) => {
    cos.uploadFile({
      Bucket: bucketName, /* 必须 */
      Region: region, /* 存储桶所在地域，必须字段 */
      Key: fileName, // 文件名
      StorageClass: 'STANDARD', // 上传类型，可选
      Body: file, // 上传文件对象
      onTaskReady(taskId) {
        // 用于中断分片上传回调
        callBackUp && callBackUp({cos,taskId})
      },
      onProgress (progressData) {
        console.log(JSON.stringify(progressData));
      },
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onFileFinish (err, data, options) {
        console.log(options.Key + '上传' + (err ? '失败' : '完成'));
      },
    }, (err, data) => {
      // 将上传后的封面进行路径拼接保存到本地
      resolve(data)
      reject(err)
    })
  })
}
