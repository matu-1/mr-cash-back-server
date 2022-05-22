import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';
import { CONFIG } from '../../constants/config';

@Entity()
export class Coupon extends BaseEntity {
  @Column({ length: 150 })
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column({ type: 'tinyint', default: CONFIG.STATUS.ENABLED })
  status: number;
  @Column({ type: 'decimal', precision: 16, scale: 2 })
  amount: number;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
