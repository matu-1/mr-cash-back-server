import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { City } from '../city/city.entity';
import { CONFIG } from '../../constants/config';

@Entity()
export class Customer extends BaseEntity {
  @Column({ length: 100 })
  name: string;
  @Column({ length: 12 })
  phone: string;
  @Column({ length: 80 })
  email: string;
  @Column({ type: 'date' })
  birthday: Date;
  @Column({ type: 'tinyint', default: CONFIG.STATUS.ENABLED })
  status: number;
  @Column({ length: 100, name: 'referred_code' })
  referredCode: string;
  @Column({ length: 300, name: 'profile_photo_url', nullable: true })
  profilePhotoUrl: string;
  @Column({ length: 300, name: 'identity_front_url', nullable: true })
  identityFrontUrl: string;
  @Column({ length: 300, name: 'identity_back_url', nullable: true })
  identityBackUrl: string;
  @Column({ length: 250, name: 'token_notification', nullable: true })
  tokenNotification: string;
  //relations
  @Column({ name: 'city_id' })
  cityId: string;
  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
