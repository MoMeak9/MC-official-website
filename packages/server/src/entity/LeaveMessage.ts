import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LeaveMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  userId: number;

  @Column()
  user_uuid: string;

  @Column()
  userAvatar: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;
}
