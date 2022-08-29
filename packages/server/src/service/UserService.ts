import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { Code } from '../entity/Code';
import { md5 } from '../utils';
import { EXPIRES, PRIVATE_KEY, PWD_SALT } from '../config';
import sendMail from '../utils/sendMail';
import jwt = require('jsonwebtoken');
import { Forbidden } from '../utils/HttpException';

const userSelect = {
  id: true,
  user_game_id: true,
  is_whitelist: true,
  user_score: true,
  user_email: true,
  user_uuid: true,
  user_QQ: true,
};

export class UserService {
  private userRepository = AppDataSource.getRepository(User);
  private codeRepository = AppDataSource.getRepository(Code);

  async checkPassword(
    user_password: string,
    user_email: string,
  ): Promise<Array<User>> {
    user_password = md5(user_password + PWD_SALT);

    return await this.userRepository.find({
      where: {
        user_email,
        user_password,
      },
      select: userSelect,
    });
  }

  async signToken(user: User): Promise<string> {
    return await jwt.sign({ ...user }, PRIVATE_KEY, {
      expiresIn: EXPIRES,
    });
  }

  async getCodeByEmail(user_email: string) {
    return await this.codeRepository.findOne({
      where: {
        user_email,
      },
      select: {
        id: true,
        user_email: true,
        code: true,
      },
    });
  }

  async getUserById(id: number):Promise<User> {
    return await this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getUserByUUID(user_uuid: string): Promise<Array<User>> {
    return await this.userRepository.find({
      where: {
        user_uuid,
      },
      select: userSelect,
    });
  }

  async setScore(user_uuid: string, user_score: number) {
    return await this.userRepository.update(
      {
        user_uuid,
      },
      {
        user_score,
      },
    );
  }

  async getUserByGameID(user_game_id: string): Promise<Array<User>> {
    return await this.userRepository.find({
      where: {
        user_game_id,
      },
      select: userSelect,
    });
  }

  async getUserByEmail(user_email: string): Promise<Array<User>> {
    return await this.userRepository.find({
      where: {
        user_email,
      },
      select: userSelect,
    });
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async checkCode(user_email: string, code: string): Promise<boolean> {
    const result = await this.codeRepository.find({
      where: {
        user_email,
      },
    });

    return !(result.length === 0 || result[0].code !== code);
  }

  async createCode(user_email: string, code: string) {
    await this.codeRepository.save({
      user_email,
      code,
    });
  }

  async deleteCode(user_email: string) {
    await this.codeRepository.delete({
      user_email,
    });
  }

  async checkHasCode(user_email: string): Promise<boolean> {
    const result = await this.codeRepository.find({
      where: {
        user_email,
      },
    });

    return result.length === 0;
  }

  async sendEmail(user_email: string, code: string) {
    await sendMail({
      email: user_email,
      content: `
        <p style='text-indent: 2em;'>亲爱的辉光世界注册玩家：</p>
        <p style='text-indent: 2em;'>您的注册验证码<strong>${code}</strong>，验证码5分钟内有效，请尽快使用！
        <p style='text-indent: 2em;'>祝您工作顺利，心想事成</p>
        <p style='text-align: right;'>—— 辉光世界|LightWorld</p>`,
    });
    setTimeout(() => {
      this.codeRepository
        .delete({
          user_email,
        })
        .catch((err) => {
          console.log(err);
        });
    }, 300000);
  }

  async updateUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async getAllUser(current, pageSize): Promise<Array<User>> {
    return await this.userRepository.find({
      order: {
        id: 'DESC',
      },
      skip: (current - 1) * pageSize,
      take: pageSize,
      select: userSelect,
    });
  }

  // 权限校验
  checkPermission(role: string): boolean {
    if (role === 'admin' || role === 'user') {
      throw new Forbidden('没有权限');
    }

    return false;
  }
}
