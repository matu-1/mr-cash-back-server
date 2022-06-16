import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/utils/base.entity';
import { Credit } from '../credit/credit.entity';
import { Coupon } from '../coupon/coupon.entity';
import { FeeStatus } from './credit-fee.enum';

@Entity()
export class CreditFee extends BaseEntity {
  @Column({ type: 'decimal', precision: 16, scale: 2 })
  amount: number;
  @Column({
    name: 'amount_paid',
    type: 'decimal',
    precision: 16,
    scale: 2,
    nullable: true,
  })
  amountPaid: number;
  @Column({
    name: 'amount_coupon',
    type: 'decimal',
    precision: 16,
    scale: 2,
    default: 0,
  })
  amountCoupon: number;
  @Column({ name: 'payment_method', type: 'tinyint', nullable: true })
  paymentMethod: number;
  @Column({ type: 'tinyint', default: FeeStatus.Pending })
  status: number;
  @Column({ name: 'payment_date', type: 'date' })
  paymentDate: Date;
  @Column({ name: 'paid_at', nullable: true })
  paidAt: Date;
  //relations
  @Column({ name: 'credit_id' })
  creditId: string;
  @Column({ name: 'coupon_id', nullable: true })
  couponId: string;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
  @ManyToOne(() => Coupon)
  @JoinColumn({ name: 'coupon_id' })
  coupon: Coupon;
}
