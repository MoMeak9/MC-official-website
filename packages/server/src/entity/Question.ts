import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 16 })
  question_type: string;

  @Column()
  question_title: string;

  @Column()
  question_text: string;

  @Column()
  question_option: string;

  @Column()
  question_answer: string;

  @Column()
  question_score: number;

  @CreateDateColumn({
    type: 'datetime',
  })
  create_time?: Date;

  @UpdateDateColumn({
    type: 'datetime',
  })
  update_time?: Date;
}
