import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';

@Entity()
export class BankAccount extends BaseEntity {
  @Column({ length: 100 })
  holder: string;
  @Column({ length: 80, name: 'account_number' })
  accountNumber: string;
  @Column({ length: 80, name: 'bank_name' })
  bankName: string;
  @Column({ length: 80, name: 'identity_number' })
  identityNumber: string;
  @Column({ length: 50, name: 'account_type' })
  accountType: string;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
