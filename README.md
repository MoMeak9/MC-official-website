# LightWorld|辉光世界官网

<p style="text-align:center;">
    <img alt="" src="https://cdn.yihuiblog.top/images/logo.e536265.png"/><br>
    LightWorld 辉光世界官网<br/>
    基于Vue、Nuxt.js、Vuetify 开发的Minecraft我的世界国际服网站
<p/>

[English](https://github.com/MoMeak9/MC-official-website/blob/master/README.en.md) | 简体中文

随着我个人建立开放的我的世界服务器玩家越来越多的，需要有一个更加正式的宣传端口，并且希望有一个网站可以解决类似白名单发布审核这样的事情（主要还是懒得手动审批问卷 233）

## 关于项目

这个项目更像是一个综合前端技术栈的实践 demo，当然也提供了基础的网页布局和工具配置。也同时使用了 Eslint 和 TypeScript 等等

TypeScript + Express [后端项目地址](https://github.com/MoMeak9/MC-official-website-service)

**关于 Nuxt 与 SSR**

利用 Nuxt 的 SSR 模式（也叫做 "universal" or "isomorphic" 模式），Node.js 服务器将基于 Vue 的组件渲染成 HTML 并传输到客户端，而不是纯 javascript。与传统的 Vue SPA 相比，使用 SSR 将带来巨大的 SEO 提升、更好的用户体验和更多的机会。

**关于为什么使用 Vue2 而不是 Vue3？**

Nuxt 3 还处于 beta 阶段，而且有着更加优异的用户交互体验的 Vuetify 的 Vue3 版本也尚处于 Alpha 阶段，所以先使用了基于 Vue2 的 Nuxt，也是为了避免踩坑......

**服务端以及管理系统**

服务端尚在完善当中，使用 Express.js 和 Typescript 编写，敬请期待哦~

[管理系统](https://github.com/MoMeak9/MC-official-website-CMS)

**后续工作**

后续还有很多工作要做哦，会不断完善学习完善哒

## 预览

[辉光世界](https://lwmc.net)

## 目录

## 使用

本地运行

```shell
yarn run dev
```

打包构建

```shell
yarn run build
```

启动

```shell
yarn run start
```

## 部署

当你将项目打包构建完成之后，上传以下文件至服务器并启动：

- .nuxt
- static
- nuxt.config.js
- package.json

## 贡献

使用过程中发现任何问题都可以提 Issue 给我，当然，我们也非常欢迎你给我发 PR。

## 开源协议

MIT
