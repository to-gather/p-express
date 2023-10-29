import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './Base';
import { User } from './User';

@Entity('todo')
export class Todo extends Base {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  isDone: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;
}
