# MC-official-website-service

原先自个 MC 服务器官网小试牛刀的 demo，已经使用 TypeScript + Express 编写，分层为 Service,Controller,Routes。ORM 使用 Typeorm ，默认 MySQL，中间件添加了总的错误处理。

Api 文档使用 ApiPost，见[辉光世界服务端 Api]()

## 实现功能

### 用户

- [x] 用户登入
- [x] 用户注册
- [x] 用户信息处理
- [x] 邮件验证码
- [x] 更新用户信息、上传头像

### 服务器

- [x] 游戏服务器信息获取
- [x] 服务器状态监控
- [ ] 站点监控

### 问卷

- [x] 提交问卷
- [x] 自动审核问卷

### 画廊

- [ ] 上传图片
- [ ] 审核图片
- [ ] 下载图片
- [ ] 画廊瀑布流展示

### Admin

- [x] Ban 人~
- [x] 玩家状态和信息管理

## 额外配置项

- COS 密钥
- MCSM 的 api Key（如果附带我的世界面板的相关接口）
- `DATABASE_URL=""`

## 使用

开发环境启动

```shell
npm run dev
# set NODE_ENV=development&& nodemon src/app.ts
```

生产环境启动

```shell
npm run pro
# set NODE_ENV=production&& nodemon src/app.ts
```

发布（tsc 转换，未使用 webpack 哦~）

```shell
npm run build
```

## 部署

使用 serverless，请配置好`scf_bootstrap`

```shell
#!/usr/bin/env bash
/var/lang/node12/bin/node ./dist/app.js
```

tsc 导出位置`dist`
