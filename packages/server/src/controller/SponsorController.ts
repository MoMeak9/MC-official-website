import {
  ParameterException,
  ServerError,
  Success,
} from '../utils/HttpException';
import { Req } from '../types';
import { SponsorService } from '../service/SponsorService';
import { UserService } from '../service/UserService';
import { NextFunction, Response } from 'express';

export class SponsorController {
  private sponsorService: SponsorService = new SponsorService();
  private userService: UserService = new UserService();

  async getSponsors(
    req: Req,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const page =
      typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
    const pageSize =
      typeof req.query.pageSize === 'string'
        ? parseInt(req.query.pageSize)
        : 10;
    const sponsorRecords = await this.sponsorService.getSponsors(
      page,
      pageSize
    );
    if (!sponsorRecords) {
      next(new ParameterException('没有查询到数据'));
    }
    next(new Success(sponsorRecords, '查询成功'));
  }

  async createSponsor(
    req: Req,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user_id, number } = req.body;
      const sponsor = await this.sponsorService.createSponsor({
        user: await this.userService.getUserById(parseInt(user_id)),
        number,
      });
      if (!sponsor) {
        next(new ParameterException('添加失败'));
      }
      next(new Success(sponsor, '添加成功'));
    } catch (e) {
      console.log(e);
      next(new ServerError());
    }
  }

  async updateSponsor(
    req: Req,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const id = parseInt(req.params.id);
    const { number, userId } = req.body;
    const sponsor = await this.sponsorService.updateSponsor({
      id,
      number,
      user: userId,
    });
    if (!sponsor) {
      next(new ServerError('更新失败'));
    }
    next(new Success(sponsor, '更新成功'));
  }

  async deleteSponsor(
    req: Req,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const id = parseInt(req.params['id']);
    const { affected } = await this.sponsorService.deleteSponsorById(id);
    if (!affected) {
      next(new ParameterException('记录不存在'));
    }
    next(new Success(affected, '删除成功'));
  }

  async getSponsorList(
    req: Req,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const page =
      typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
    const pageSize =
      typeof req.query.pageSize === 'string'
        ? parseInt(req.query.pageSize)
        : 10;
    const sponsorRecords = await this.sponsorService.getSponsorList(
      page,
      pageSize
    );
    // await UserController.checkAuth(req, res, next);
    if (!sponsorRecords) {
      next(new ParameterException('没有查询到数据'));
    }
    next(
      new Success(
        {
          sponsorList: sponsorRecords,
          page,
          pageSize,
          total: sponsorRecords.length,
        },
        '查询成功'
      )
    );
  }
}
