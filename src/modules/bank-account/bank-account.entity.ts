import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';

@Entity()
export class BankAccount extends BaseEntity {
  @Column({ length: 100 })
  holder: string;
  @Column({ length: 80 })
  accountNumber: string;
  @Column({ length: 80 })
  bankName: string;
  @Column({ length: 80 })
  identityCard: string;
  @Column({ length: 10 })
  phoneNumber: string;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
