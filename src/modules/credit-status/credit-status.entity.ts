import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Credit } from '../credit/credit.entity';

@Entity()
export class CreditStatus extends BaseEntity {
  @Column({ type: 'tinyint' })
  status: number;
  //relations
  @Column({ name: 'credit_id' })
  creditId: string;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
}
