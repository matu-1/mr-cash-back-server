import { BaseEntity } from 'src/utils/base.entity';
import { BeforeInsert, Column, Entity } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 80 })
  name: string;
  @Column({ length: 80, unique: true })
  email: string;
  @Column({ length: 150 })
  password: string;
  @Column({ length: 80 })
  role: string;

  @BeforeInsert()
  hashPassword() {
    const salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt);
  }
}
