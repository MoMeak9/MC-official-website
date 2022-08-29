import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Code {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 50 })
  code: string;

  @Column({ length: 100 })
  user_email: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;
}
