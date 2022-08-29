import { AppDataSource } from '../data-source';
import { SponsorRecord } from '../entity/SponsorRecord';
import { DeleteResult } from 'typeorm';

export class SponsorService {
  private sponsorsRepository = AppDataSource.getRepository(SponsorRecord);

  async getSponsors(page, pageSize) {
    return (
      (await this.sponsorsRepository.find({
        skip: (page - 1) * pageSize,
        take: pageSize,
        order: {
          number: 'ASC',
        },
        relations: ['user'],
        select: {
          id: true,
          number: true,
          create_time: true,
          user: {
            id: true,
            user_game_id: true,
          },
        },
      })) || [[]]
    );
  }

  async getSponsorList(page, pageSize) {
    return (
      await this.sponsorsRepository
        .createQueryBuilder('sponsor')
        .leftJoinAndSelect('sponsor.user', 'user')
        .where('sponsor.number > 0')
        .groupBy('user.user_game_id')
        .select('user.user_game_id, SUM(sponsor.number) AS total_number')
        .orderBy('total_number', 'DESC')
        .getRawMany()
    ).slice((page - 1) * pageSize, page * pageSize);
  }

  async createSponsor(sponsor: SponsorRecord): Promise<SponsorRecord> {
    return await this.sponsorsRepository.save(sponsor);
  }

  async updateSponsor(sponsor: SponsorRecord): Promise<SponsorRecord> {
    return await this.sponsorsRepository.save(sponsor);
  }

  async deleteSponsorById(id: number): Promise<DeleteResult> {
    return await this.sponsorsRepository.delete(id);
  }
}
