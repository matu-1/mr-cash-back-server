import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Config extends BaseEntity {
  @Column({ type: 'tinyint', name: 'show_offer' })
  showOffer: number; //[0, 1]
}
