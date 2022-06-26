/* eslint-disable */
import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from 'typeorm';
import { User } from 'src/users/user.entity';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed?: boolean;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @CreateDateColumn()
  createAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @ManyToOne(()=> User, (user)=> user.Todo)
  user : User;
}

