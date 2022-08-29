const config = {
  PRIVATE_KEY: 'NodeBlogFoMYTOKEN',
  EXPIRES: 60 * 60 * 24,
  serverAddress: '',
  KEY: '',
  config: {
    proxy: '',
    durationSeconds: 1800,

    // 放行判断相关参数
    bucket: 'test-1250000000',
    region: 'ap-guangzhou',
    allowPrefix: 'exampleobject', // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的具体路径，例子： a.jpg 或者 a/* 或者 * (使用通配符*存在重大安全风险, 请谨慎评估使用)
    // 简单上传和分片，需要以下的权限，其他权限列表请看 https://cloud.tencent.com/document/product/436/31923
    allowActions: [
      // 简单上传
      'name/cos:PutObject',
      'name/cos:PostObject',
      // 分片上传
      'name/cos:InitiateMultipartUpload',
      'name/cos:ListMultipartUploads',
      'name/cos:ListParts',
      'name/cos:UploadPart',
      'name/cos:CompleteMultipartUpload',
    ],
  },
  MCServer: '',
};
export const PWD_SALT = 'NodeBlogFoMYTOKEN';
export const PRIVATE_KEY = 'NodeBlogFoMYTOKEN';
export const EXPIRES = 60 * 60 * 24;
export const whitelist = [
  '/api/user/register',
  '/api/user/sendCode',
  '/api/user/login',
  '/api/user/getAllUsers',
  '/api/website/getServerInfo',
  '/api/website/teamMember',
  '/api/website/period',
  '/api/website/updateVisitorNum',
  '/api/article/detail',
  '/api/article/classify',
  '/api/website/gallery',
  '/api/sponsor/list',
  /^\/api\/api-docs.*/,
  /^\/\/uploads\/\/.*/,
];
