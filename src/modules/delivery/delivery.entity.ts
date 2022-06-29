import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Credit } from '../credit/credit.entity';

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
  @Column({ name: 'credit_id' })
  creditId: string;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
}
