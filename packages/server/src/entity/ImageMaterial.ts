import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// 网站图片素材管理
@Entity()
export class ImageMaterial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image_name: string;

  @Column()
  description: string;

  @Column()
  image_url: string;

  @CreateDateColumn({ type: 'datetime' })
  create_time: Date;

  @UpdateDateColumn({ type: 'datetime' })
  update_time: Date;
}
