import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 100 })
  article_title: string;

  @Column({ length: 100 })
  article_subtitle: string;

  @Column({ type: 'text' })
  article_content: string;

  @Column({ length: 100 })
  article_cover: string;

  @Column({ length: 100 })
  user_uuid: string;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;
}
