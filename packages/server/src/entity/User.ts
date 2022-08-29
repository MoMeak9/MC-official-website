import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Gallery } from './Gallery';
import { SponsorRecord } from './SponsorRecord';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 64, nullable: false })
  user_uuid?: string;

  @Column({ length: 64, nullable: false })
  user_game_id: string;

  @Column({ nullable: false })
  user_password: string;

  @Column({ nullable: false })
  user_email: string;

  @Column({ default: 0 })
  user_score?: number;

  // 权限等级 0 - 3
  @Column({ default: 0 })
  user_role?: number;

  @Column({ default: 0 })
  is_whitelist?: number;

  @Column({ default: '', nullable: true })
  user_image_url?: string;

  @Column({ length: 128, default: '' })
  user_QQ: string;

  @OneToMany(() => Gallery, (galleries) => galleries.user)
  galleries?: Gallery[];

  @OneToMany(() => SponsorRecord, (sponsorRecords) => sponsorRecords.user)
  sponsorRecords?: SponsorRecord[];

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;

  @Column({ default: 0 })
  user_is_ban?: number;
}
