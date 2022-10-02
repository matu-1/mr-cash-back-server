import { BaseEntity } from 'src/utils/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { SALE_STATUS } from './sale.constant';
import { Customer } from '../customer/customer.entity';
import { Delivery } from '../delivery/delivery.entity';
import { ProductSale } from '../product-sale/product-sale.entity';

@Entity()
export class Sale extends BaseEntity {
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
  @Column({ type: 'tinyint', default: SALE_STATUS.PENDING })
  status: number;
  @Column({ name: 'payment_method', type: 'tinyint' })
  paymentMethod: number;
  //relations
  @Column({ name: 'customer_id' })
  customerId: string;
  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
  @OneToOne(() => Delivery, (delivery) => delivery.sale)
  delivery: Delivery;
  @OneToMany(() => ProductSale, (product) => product.sale)
  products: ProductSale[];
}
