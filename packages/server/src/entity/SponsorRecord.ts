import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './User';

@Entity()
export class SponsorRecord {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => User, (user) => user.sponsorRecords)
  user: User;

  @Column({ type: 'float' })
  number: number;

  @CreateDateColumn({ type: 'datetime' })
  create_time?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  update_time?: Date;
}
