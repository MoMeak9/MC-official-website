import express = require('express');
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { AppDataSource } from './data-source';
import { Routes } from './routes';
import { defaultErrorHandler } from './middleware/error';
import { scheduleJobs } from './utils/schedule'; // 定时任务
import { PRIVATE_KEY, whitelist } from './config';
import cors = require('cors');
import path = require('path');
import cookieParser = require('cookie-parser');
import jwt = require('express-jwt');

const multer = require('multer');
const upload = multer();

AppDataSource.initialize()
  .then(async () => {
    scheduleJobs();
    // create express app
    const app = express();

    app.use(bodyParser.json());
    // setup express app here
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    // jwt配置
    app.use(
      jwt
        .expressjwt({
          secret: PRIVATE_KEY,
          algorithms: ['HS256'],
        })
        .unless({
          path: whitelist, // ⽩名单,除了这⾥写的地址，其他的URL都需要验证
        }),
    );
    // register express route from defined application route

    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        route.formData ? upload.array('files', 10) : [],
        // eslint-disable-next-line @typescript-eslint/ban-types
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next,
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined,
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        },
      );
    });
    // start express server
    app.listen(9000, () => {
      console.log(`app listening at http://localhost:${9000}`);
    });

    // error handler
    app.use(defaultErrorHandler);
  })
  .catch((error) => console.log(error));
