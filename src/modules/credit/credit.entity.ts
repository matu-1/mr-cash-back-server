import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';
import { BankAccount } from '../bank-account/bank-account.entity';
import { CREDIT_STATUS } from './credit.constant';
import { Warranty } from '../warranty/warranty.entity';
import { Delivery } from '../delivery/delivery.entity';

@Entity()
export class Credit extends BaseEntity {
  @Column({ name: 'original_amount', type: 'decimal', precision: 16, scale: 2 })
  originalAmount: number;
  @Column({
    name: 'total_amount',
    type: 'decimal',
    precision: 16,
    scale: 2,
  })
  totalAmount: number;
  @Column({ type: 'decimal', precision: 16, scale: 2, default: 0 })
  balance: number;
  @Column({ name: 'quantity_fee', type: 'tinyint' })
  quantityFee: number;
  @Column({ type: 'tinyint' })
  plan: number;
  @Column({ type: 'tinyint', default: CREDIT_STATUS.PENDING })
  status: number;
  @Column({
    name: 'delivery_amount',
    type: 'decimal',
    precision: 16,
    scale: 2,
    nullable: true,
  })
  deliveryAmount: number;
  @Column({ name: 'percentage_service_fee', type: 'double' })
  percentageServiceFee: number;
  @Column({ name: 'percentage_interest', type: 'double' })
  percentageInterest: number;
  @Column({ name: 'url_contract', nullable: true })
  urlContract: string;
  @Column({ name: 'url_signature', nullable: true })
  urlSignature: string;
  @Column({ name: 'disburse_at', nullable: true })
  disburseAt: Date;
  @Column({ name: 'express_disbursement', default: 0, type: 'tinyint' })
  expressDisbursement: number;
  @Column({ name: 'approved_photo_url', nullable: true })
  approvedPhotoUrl: string;
  @Column({ name: 'disbursement_photo_url', nullable: true })
  disbursementPhotoUrl: string;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @Column({ name: 'bank_account_id' })
  bankAccountId: string;
  @Column({ name: 'credit_previous_id', nullable: true })
  creditPreviousId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  @ManyToOne(() => BankAccount)
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount: BankAccount;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_previous_id' })
  creditPrevious: Credit;
  @OneToMany(() => Warranty, (warranty) => warranty.credit)
  warranties: Warranty[];
  @OneToOne(() => Delivery, (delivery) => delivery.credit)
  delivery: Delivery;
}
