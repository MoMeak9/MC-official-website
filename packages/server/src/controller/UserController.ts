import { NextFunction, Response } from 'express';
import { Request } from 'express-jwt';
import { UserService } from '../service/userService';
import { Forbidden, ParameterException, Success } from '../utils/HttpException';
import { v4 } from 'uuid';
import { md5 } from '../utils';
import { PWD_SALT } from '../config';

export class UserController {
  private UserService = new UserService();
  private static UserService: UserService;

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { user_password, user_email } = req.body;
    if (user_email == null || user_password == null) {
      next(new ParameterException('参数缺失'));

      return;
    }
    const result = await this.UserService.checkPassword(
      user_password,
      user_email,
    );
    if (result.length !== 0) {
      const token = await this.UserService.signToken(result[0]);
      next(new Success({ token: token, userBean: result[0] }));
    } else {
      next(new ParameterException('用户名或密码错误'));
    }
  }

  async register(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { user_email, user_game_id, user_password, user_QQ, code } = req.body;
    if (!user_email || !user_game_id || !user_password || !user_QQ || !code) {
      next(new ParameterException('参数缺失'));
    }
    (await this.UserService.checkCode(user_email, code)) ||
      next(new ParameterException('验证码错误'));
    const result = await this.UserService.getUserByEmail(user_email);
    if (result.length !== 0) {
      next(new ParameterException('用户已存在'));
    } else {
      await this.UserService.deleteCode(user_email);
      const user = await this.UserService.createUser({
        user_uuid: v4(),
        user_email,
        user_game_id,
        user_password: md5(user_password + PWD_SALT),
        user_QQ,
      });
      const token = this.UserService.signToken(user);
      next(new Success({ token, userBean: user }, '注册成功'));
    }
  }

  async sendCode(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { user_email } = req.body;
    if (!user_email) {
      next(new ParameterException('参数缺失'));
    }
    if (await this.UserService.checkHasCode(user_email)) {
      const code = Math.floor(Math.random() * 9000 + 1000).toString();
      await this.UserService.createCode(user_email, code);
      await this.UserService.sendEmail(user_email, code);
      next(new Success({}, '请查收邮件'));
    } else {
      next(new ParameterException('验证码已发送，请5分钟后再试'));
    }
  }

  async list(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { current, pageSize } = req.body;
    next(new Success(await this.UserService.getAllUser(current, pageSize)));
  }

  async getUserInfo(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const { user_uuid } = req.auth;
    if (!user_uuid) {
      next(new ParameterException('参数缺失'));
    }
    next(
      new Success({
        userBean: (await this.UserService.getUserByUUID(user_uuid))[0],
      }),
    );
  }

  // 用户权限校验(管理员)
  static async checkAuth(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    console.log(req.auth);
    const { user_uuid } = req.auth;
    if (!user_uuid) {
      next(new ParameterException('参数缺失'));
    }
    const user = (await this.UserService.getUserByUUID(user_uuid))[0];
    user.user_role === 1 ? next() : next(new Forbidden('权限不足'));
  }
}
