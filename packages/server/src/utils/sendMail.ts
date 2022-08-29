const nodemailer = require('nodemailer');

type Data = {
  email: string;
  content?: string;
};

export default async (data: Data) => {
  console.log('sendMail', data.email);
  const transporter = await nodemailer.createTransport({
    service: 'QQ', // 发送者的邮箱厂商，支持列表：https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // SSL安全链接
    auth: {
      //发送者的账户密码
      user: process.env.EMAIL_USER, //账户
      pass: process.env.EMAIL_PASS, //smtp授权码，到邮箱设置下获取
    },
  });
  const info = await transporter.sendMail({
    from: 'Gengmain<1756612949@qq.com>', // 发送者昵称和地址
    to: data.email, // 接收者的邮箱地址
    subject: 'LightWorld|辉光世界', // 邮件主题
    html: data.content,
  });
  console.log('Message sent: %s', info.messageId);
};
