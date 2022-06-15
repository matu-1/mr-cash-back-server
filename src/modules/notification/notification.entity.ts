import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Notification extends BaseEntity {
  @Column({ length: 80 })
  title: string;
  @Column({ length: 150 })
  body: string;
  @Column({ type: 'tinyint', default: 0 })
  read: number;
  @Column({ name: 'customer_id' })
  customerId: string;
}
