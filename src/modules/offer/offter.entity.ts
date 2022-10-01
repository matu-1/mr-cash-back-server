import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { OFFER_STATUS } from './offer.constant';
import { Customer } from '../customer/customer.entity';
import { BankAccount } from '../bank-account/bank-account.entity';
import { BaseEntity } from '../../utils/base.entity';
import { Product } from '../product/product.entity';
import { Delivery } from '../delivery/delivery.entity';

@Entity()
export class Offer extends BaseEntity {
  @Column({
    name: 'total_amount',
    type: 'decimal',
    precision: 16,
    scale: 2,
  })
  totalAmount: number;
  @Column({
    name: 'delivery_amount',
    type: 'decimal',
    precision: 16,
    scale: 2,
    nullable: true,
  })
  deliveryAmount: number;
  @Column({ name: 'url_contract', nullable: true })
  urlContract: string;
  @Column({ name: 'url_signature', nullable: true })
  urlSignature: string;
  @Column({ name: 'disburse_at', nullable: true })
  disburseAt: Date;
  @Column({ type: 'tinyint', default: OFFER_STATUS.PENDING })
  status: number;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @Column({ name: 'bank_account_id' })
  bankAccountId: string;
  @Column({ name: 'offer_previous_id', nullable: true })
  offerPreviousId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  @ManyToOne(() => BankAccount)
  @JoinColumn({ name: 'bank_account_id' })
  bankAccount: BankAccount;
  @ManyToOne(() => Offer)
  @JoinColumn({ name: 'offer_previous_id' })
  offerPrevious: Offer;
  @OneToMany(() => Product, (product) => product.offer)
  products: Product[];
  @OneToOne(() => Delivery, (delivery) => delivery.offer)
  delivery: Delivery;
}
