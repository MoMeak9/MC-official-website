import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Paper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  user_uuid: string;

  @Column({ type: 'text' })
  paper_content: string;

  @Column({ type: 'tinyint', default: 0 })
  paper_score: number;

  @Column({ type: 'tinyint', default: 0 })
  paper_percent: number;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;
}
