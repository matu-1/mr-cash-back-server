import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Credit } from '../credit/credit.entity';
import { Offer } from '../offer/offter.entity';
import { Sale } from '../sale/sale.entity';

@Entity()
export class Delivery extends BaseEntity {
  @Column({ type: 'double' })
  latitude: number;
  @Column({ type: 'double' })
  longitude: number;
  @Column({ type: 'varchar', length: 100 })
  address: string;
  @Column({ type: 'varchar', length: 100 })
  reference: string;
  @Column({ type: 'decimal', precision: 16, scale: 2, default: 0 })
  amount: number;
  // relations
  @Column({ name: 'credit_id', nullable: true })
  creditId: string;
  @Column({ name: 'offer_id', nullable: true })
  offerId: string;
  @Column({ name: 'sale_id', nullable: true })
  saleId: string;
  @OneToOne(() => Credit, (credit) => credit.delivery)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
  @OneToOne(() => Offer, (offer) => offer.delivery)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;
  @OneToOne(() => Sale, (sale) => sale.delivery)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;
}
