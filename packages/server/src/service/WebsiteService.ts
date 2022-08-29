import { AppDataSource } from '../data-source';
import { User } from '../entity/User';
import { Paper } from '../entity/Paper';
import { Gallery } from '../entity/Gallery';
import { TeamMember } from '../entity/TeamMember';
import { Period } from '../entity/Period';
import { commandServer } from '../config/api';
import { correctPaper } from '../utils/correctPaper';
import { IPaperQuestion } from '../types';
import { getPolicy, uploadFile } from '../utils/cos';
import sendMail from '../utils/sendMail';
import { DeleteResult, UpdateResult } from 'typeorm';

export class WebsiteService {
  private userRepository = AppDataSource.getRepository(User);
  private paperRepository = AppDataSource.getRepository(Paper);
  private galleryRepository = AppDataSource.getRepository(Gallery);
  private teamMemberRepository = AppDataSource.getRepository(TeamMember);
  private periodRepository = AppDataSource.getRepository(Period);

  // 新增考试记录
  async addPaper(paper: Paper) {
    return await this.paperRepository.save(paper);
  }

  getUserPaper(user_uuid: string) {
    return this.paperRepository.find({
      where: {
        user_uuid,
      },
    });
  }

  // 批改试卷
  getScore(paper_content: IPaperQuestion[]): {
    score: number;
    percentScore: number;
  } {
    return correctPaper(paper_content);
  }

  async sendPassEmail(user_game_id, user_email) {
    await sendMail({
      email: user_email,
      content: `
        <p style='text-indent: 2em;'>亲爱的${user_game_id}：</p>
        <p style='text-indent: 2em;'>您通过了我们的白名单审核！白名单将在1分钟内生效。
        <p style='text-indent: 2em;'>服务器地址：game.lwmc.net</p>
        <p style='text-align: right;'>—— 辉光世界|LightWorld</p>`,
    });
  }

  async sendFailPassEmail(user_game_id, user_email) {
    await sendMail({
      email: user_email,
      content: `
        <p style='text-indent: 2em;'>亲爱的${user_game_id}：</p>
        <p style='text-indent: 2em;'>您的白名单审核未通过！请再次检查您的试卷答案并重新提交，如有疑问请联系我们的客服。
        <p style='text-align: right;'>—— 辉光世界|LightWorld</p>`,
    });
  }

  async addWhitelist(user_game_id: string) {
    const user = await this.userRepository.findOne({ where: { user_game_id } });
    user.is_whitelist = 1;
    await this.userRepository.save(user);
    await commandServer({
      command: `whitelist add ${user_game_id}`, // 需要执行的命令
    });
  }

  async removeWhitelist(user_game_id: string) {
    await commandServer({
      command: `whitelist remove ${user_game_id}`, // 需要执行的命令
    });
  }

  // 获取COS密钥
  async getCosSecret() {
    return await getPolicy();
  }

  // 文件上传
  async uploadSingleFile(file): Promise<string> {
    const { Location, statusCode, error } = await uploadFile(file);
    if (statusCode === 200) {
      const strArr = Location.split('/');
      console.log(strArr);
      strArr.shift();
      console.log(strArr);

      return (
        'https://cdn.lwmc.net' +
        strArr.reduce((acc, cur) => {
          if (cur.indexOf('?') !== -1) {
            return acc;
          }

          return `${acc}/${cur}`;
        }, '')
      );
    }

    return error.toString();
  }

  // 多个小文件上传(好像没啥用)
  async uploadMultipleFile(files) {
    return await Promise.all(files.map((file) => uploadFile(file)));
  }

  async addGallery(gallery: Gallery): Promise<Gallery> {
    return await this.galleryRepository.save(gallery);
  }

  async getGallery(page = 1, pageSize = 10): Promise<Gallery[]> {
    return await this.galleryRepository
      .createQueryBuilder('gallery')
      .select(['gallery.img_url AS src', 'gallery.title AS info'])
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getRawMany();
  }

  async setGalleryStatus(id: number, status: number): Promise<UpdateResult> {
    return await this.galleryRepository.update(id, { status });
  }

  async removeGallery(id: number): Promise<DeleteResult> {
    return await this.galleryRepository.delete(id);
  }

  // 团队成员管理
  async addTeamMember(teamMember: TeamMember): Promise<TeamMember> {
    return await this.teamMemberRepository.save(teamMember);
  }

  async deleteTeamMember(id: number): Promise<DeleteResult> {
    return await this.teamMemberRepository.delete(id);
  }

  async getTeamMember(page, pageSize): Promise<TeamMember[]> {
    return await this.teamMemberRepository.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async updateTeamMember(
    id: number,
    teamMember: TeamMember
  ): Promise<UpdateResult> {
    return await this.teamMemberRepository.update(id, teamMember);
  }

  // 周目管理
  async addPeriod(period: Period): Promise<Period> {
    return await this.periodRepository.save(period);
  }

  async getPeriod(page, pageSize): Promise<Period[]> {
    return await this.periodRepository.find({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async updatePeriod(id: number, period: Period): Promise<Period> {
    let data = await this.periodRepository.findOne({ where: { id } });
    data = {
      ...data,
      ...period,
    };

    return await this.periodRepository.save(data);
  }

  async deletePeriod(id: number): Promise<DeleteResult> {
    return await this.periodRepository.delete(id);
  }
}
