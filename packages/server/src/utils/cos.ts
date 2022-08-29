const STS = require('qcloud-cos-sts');
const COS = require('cos-nodejs-sdk-v5');
import { PutObjectAclResult, CosError } from 'cos-nodejs-sdk-v5';
// 配置参数
const config = {
  secretId: process.env.GROUP_SECRET_ID, // 固定密钥
  secretKey: process.env.GROUP_SECRET_KEY, // 固定密钥
  proxy: '',
  host: 'cdn.lwmc.net', // 域名，非必须，默认为 sts.tencentcloudapi.com
  durationSeconds: 1800, // 密钥有效期
  // 放行判断相关参数
  bucket: 'mc-web-1259409954', // 换成你的 bucket
  region: 'ap-guangzhou', // 换成 bucket 所在地区
  allowPrefix: 'test/', // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的具体路径，例子： a.jpg 或者 a/* 或者 * (使用通配符*存在重大安全风险, 请谨慎评估使用)
};

const cos = new COS({
  SecretId: config.secretId,
  SecretKey: config.secretKey,
});

// 远程临时校验需修订
export async function getPolicy() {
  const scope = [
    {
      action: 'name/cos:InitiateMultipartUpload',
      bucket: config.bucket,
      region: config.region,
      prefix: 'test/',
      durationSeconds: config.durationSeconds,
    },
  ];
  // STS.getCredential(
  //   {
  //     secretId: config.secretId,
  //     secretKey: config.secretKey,
  //     proxy: config.proxy,
  //     policy: policy,
  //     durationSeconds: config.durationSeconds,
  //   },
  //   function (err, credential) {
  //     console.log('getPolicy,getCredential:');
  //     console.log(JSON.stringify(policy, null, '    '));
  //     console.log(err || credential);
  //   },
  // );

  return new Promise((resolve, reject) => {
    const policy = STS.getPolicy(scope);
    console.log(policy);
    STS.getCredential(
      {
        secretId: config.secretId,
        secretKey: config.secretKey,
        proxy: config.proxy,
        policy: policy,
        durationSeconds: config.durationSeconds,
      },
      (err, credential) => {
        if (err) {
          reject(err);
        } else {
          resolve(credential);
        }
      }
    );
  });
}

interface Result extends PutObjectAclResult, CosError {
  Location?: string;
  ETag?: string;
  RequestId?: string;
}

// 简单小文件上传
export const uploadFile = (file): Promise<Result> => {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate();
  const dir = 'userUpload/files/' + year + month + day;

  return new Promise((resolve, reject) => {
    cos.putObject(
      {
        Bucket: config.bucket /* 必须 */,
        Region: config.region /* 必须 */,
        Key: dir + file.originalname /* 必须 */,
        StorageClass: 'STANDARD',
        Body: file.buffer, // 上传文件对象
        onProgress: function (progressData) {
          console.log(JSON.stringify(progressData));
        },
      },
      (err: CosError, data: Result) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};
