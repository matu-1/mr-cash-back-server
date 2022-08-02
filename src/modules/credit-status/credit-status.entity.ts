import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Credit } from '../credit/credit.entity';
import { User } from '../user/user.entity';

@Entity()
export class CreditStatus extends BaseEntity {
  @Column({ type: 'tinyint' })
  status: number;
  @Column({ type: 'text', nullable: true })
  reason: string;
  //relations
  @Column({ name: 'credit_id' })
  creditId: string;
  @Column({ name: 'user_id', nullable: true })
  userId: string;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
