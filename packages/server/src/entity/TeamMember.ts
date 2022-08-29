import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  image_url: string;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column()
  description: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;
}
