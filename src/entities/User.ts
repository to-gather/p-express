import { Column, Entity, BeforeInsert } from 'typeorm';
import { Base } from './Base';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class User extends Base {
  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    try {
      this.password = await bcrypt.hash(this.password, 10);
    } catch (error) {
      console.error(error);
    }
  }
}
