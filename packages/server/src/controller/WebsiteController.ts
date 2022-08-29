import { NextFunction, Response } from 'express';
import { Req } from '../types';
import { UserService } from '../service/userService';
import { WebsiteService } from '../service/websiteService';
import { ServerError, Success } from '../utils/HttpException';

export class WebsiteController {
  private UserService = new UserService();
  private WebsiteService = new WebsiteService();

  // 提交试卷
  async submitPaper(req: Req, res: Response, next: NextFunction) {
    const { paper_content } = req.body;
    const { user_uuid, id, user_game_id, user_email } = req.auth;
    const { score, percentScore } = this.WebsiteService.getScore(paper_content);
    await this.WebsiteService.addPaper({
      user_uuid,
      paper_content: JSON.stringify(paper_content),
      paper_percent: percentScore,
      paper_score: score,
      id,
    });
    await this.UserService.setScore(user_uuid, percentScore);
    if (percentScore >= 60) {
      try {
        await this.WebsiteService.addWhitelist(user_game_id);
        await this.WebsiteService.sendPassEmail(user_game_id, user_email);
      } catch (e) {
        next(new ServerError(e));
      }
      next(
        new Success(
          {
            paper_score: score,
            paper_percent: percentScore,
          },
          '审核自动通过，请查收邮件',
        ),
      );
    } else {
      await this.WebsiteService.sendFailPassEmail(user_game_id, user_email);
      next(
        new Success(
          {
            paper_score: score,
            paper_percent: percentScore,
          },
          '审核未通过，请查收邮件',
        ),
      );
    }
  }

  // 获取COS密钥
  async getCosSecret(req: Req, res: Response, next: NextFunction) {
    await this.WebsiteService.getCosSecret();
    next(new Success('获取成功'));
  }

  async uploadSingleFile(req: Req, res: Response, next: NextFunction) {
    const files = req.files;
    console.log(files);
    const data = await this.WebsiteService.uploadSingleFile(files[0]);
    next(new Success({ fileUrl: data }, '上传成功'));
  }

  async uploadMultipleFile(req: Req, res: Response, next: NextFunction) {
    const files = req.files;
    const data = await this.WebsiteService.uploadMultipleFile(files);
    next(new Success({ fileUrl: data }, '上传成功'));
  }

  async addGallery(req: Req, res: Response, next: NextFunction) {
    try {
      const { id } = req.auth;
      const { title, description } = req.body;
      const files = req.files;
      const fileUrl = await this.WebsiteService.uploadSingleFile(files[0]);
      const data = await this.WebsiteService.addGallery({
        user: id,
        img_url: fileUrl,
        title,
        description,
      });
      next(new Success(data, '添加成功'));
    } catch (e) {
      next(new ServerError(`添加失败：${e}`));
    }
  }

  async setGalleryStatus(req: Req, res: Response, next: NextFunction) {
    try {
      const { id, status } = req.body;
      const data = await this.WebsiteService.setGalleryStatus(id, status);
      next(new Success(data, '设置成功'));
    } catch (e) {
      next(new ServerError(e));
    }
  }

  async getGallery(req: Req, res: Response, next: NextFunction) {
    try {
      const page =
        typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
      const pageSize =
        typeof req.query.pageSize === 'string'
          ? parseInt(req.query.pageSize)
          : 10;
      const data = await this.WebsiteService.getGallery(page, pageSize);
      next(new Success(data, '获取成功'));
    } catch (e) {
      next(new ServerError(`添加失败：${e}`));
    }
  }

  async removeGallery(req: Req, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const data = await this.WebsiteService.removeGallery(id);
      next(new Success(data, '删除成功'));
    } catch (e) {
      next(new ServerError(e));
    }
  }

  // 团队成员管理
  async addTeamMember(req: Req, res: Response, next: NextFunction) {
    try {
      const { name, image_url, description, role } = req.body;
      const data = await this.WebsiteService.addTeamMember({
        name,
        image_url,
        role,
        description,
      });
      next(new Success(data, '添加成功'));
    } catch (e) {
      next(new ServerError());
    }
  }

  async getTeamMember(req: Req, res: Response, next: NextFunction) {
    try {
      const page =
        typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
      const pageSize =
        typeof req.query.pageSize === 'string'
          ? parseInt(req.query.pageSize)
          : 10;
      const data = await this.WebsiteService.getTeamMember(page, pageSize);
      next(new Success(data, '获取成功'));
    } catch (e) {
      next(new ServerError(e));
    }
  }

  async deleteTeamMember(req: Req, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const data = await this.WebsiteService.deleteTeamMember(id);
      next(new Success(data, '删除成功'));
    } catch (e) {
      next(new ServerError(e));
    }
  }

  // 周目管理
  async addPeriod(req: Req, res: Response, next: NextFunction) {
    try {
      const { name, description, start_time, end_time, image_url } = req.body;
      const data = await this.WebsiteService.addPeriod({
        name,
        start_time: start_time || new Date(),
        end_time: end_time || new Date(),
        description,
        image_url,
      });
      next(new Success(data, '添加成功'));
    } catch (e) {
      next(new ServerError(e));
    }
  }

  async getPeriod(req: Req, res: Response, next: NextFunction) {
    const page =
      typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
    const pageSize =
      typeof req.query.pageSize === 'string'
        ? parseInt(req.query.pageSize)
        : 10;
    const data = await this.WebsiteService.getPeriod(page, pageSize);
    next(new Success(data, '获取成功'));
  }

  async updatePeriod(req: Req, res: Response, next: NextFunction) {
    try {
      const { id, period } = req.body;
      const data = await this.WebsiteService.updatePeriod(id, period);
      next(new Success(data, '更新成功'));
    } catch (e) {
      next(new ServerError());
    }
  }

  async deletePeriod(req: Req, res: Response, next: NextFunction) {
    try {
      const { id } = req.body;
      const data = await this.WebsiteService.deletePeriod(id);
      next(new Success(data, '删除成功'));
    } catch (e) {
      next(new ServerError());
    }
  }
}
