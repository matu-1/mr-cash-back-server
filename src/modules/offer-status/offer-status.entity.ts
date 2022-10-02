import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Offer } from '../offer/offter.entity';
import { User } from '../user/user.entity';

@Entity()
export class OfferStatus extends BaseEntity {
  @Column({ type: 'tinyint' })
  status: number;
  @Column({ type: 'text', nullable: true })
  reason: string;
  //relations
  @Column({ name: 'offer_id' })
  offerId: string;
  @Column({ name: 'user_id' })
  userId: string;
  @ManyToOne(() => Offer)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
