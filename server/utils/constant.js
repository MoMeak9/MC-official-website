/**
 * Created by Yihui_Shi on 2021/8/6 10:21
 */
module.exports = {
  PWD_SALT: 'NodeBlogFoMe',
  PRIVATE_KEY: 'NodeBlogFoMYTOKEN',
  EXPIRES: 60 * 60 * 24,
  serverAddress: 'https://app.yihuiblog.top',
  whitelist: [
    '/api/user/register',
    '/api/user/login',
    '/api/article/allArticle',
    '/api/article/detail',
    '/api/article/classify',
    /^\/api\/api-docs.*/,
    /^\/\/uploads\/\/.*/]
}
