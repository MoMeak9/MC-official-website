# LightWorld|辉光世界官网

<p style="text-align:center;">
<img alt="" src="https://cdn.yihuiblog.top/images/logo.e536265.png"/><br>
LightWorld Website<br>
Minecraft Minecraft international server website based on Vue, Nuxt.js and Vuetify
<p/>

English | [简体中文](https://github.com/MoMeak9/MC-official-website/blob/master/README.md)

As I personally built up more and more players on my world server, I needed a more formal promotional port and wanted a website that could help with things like whitelist publishing audits（I was too lazy to approve the questionnaire manually:smile:） 

## About the Project

**About Nuxt and statics**

Due to the use of Vuetify component library, due to some of its components in the IMPLEMENTATION of THE SSR is not suitable for Nuxt, resulting in the problem of nodes are not worth one, so the static rendering export is used.

**About why Vue2 is used instead of Vue3? **

Nuxt 3 is still in beta, and the Vue3 version of Vuetify is still in beta with a better user interaction experience, so vue2-based Nuxt was first used to avoid pitfalls......

> The Vue3 transformation plan has been put on the agenda. :construction_worker_man:

**Server**

TypeScript + Express [Server Project URL](https://github.com/MoMeak9/MC-official-website-service)

**Management**

React + antd 

**Follow-up Work**

There is still a lot of work to do, oh, will continue to improve learning. :goat:

## Preview

[LightWorld](https://lwmc.net/)

## Start

Run locally:

```shell
yarn run dev
```

build:

```shell
yarn run build
```

## Deploy

When your project is packaged and built, upload the following files to the server and start:

- .nuxt
- static
- nuxt.config.js
- package.json

If you are Serverless deployment of Tencent Cloud, you can not directly use 'Serverless. Yml' deployment of this project, configuration content is for reference only, see: [Tencent Cloud Doc](https://cloud.tencent.com/document/product/1154/51080)

当你将项目打包构建完成之后，上传以下文件至服务器并启动：

## Contribution

If you find any problem in the process of using it, please Issue it to me. Of course, we also welcome you to contribute PR.

## Licenses

MIT
