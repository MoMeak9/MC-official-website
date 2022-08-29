import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Period {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image_url: string;

  @Column({ type: 'datetime' })
  start_time?: Date;

  @Column({ type: 'datetime' })
  end_time?: Date;

  @CreateDateColumn({ type: 'datetime' })
  create_time?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  update_time?: Date;
}
