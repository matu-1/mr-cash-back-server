import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { City } from '../city/city.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column({ length: 100 })
  name: string;
  @Column({ length: 11 })
  phone: string;
  @Column({ length: 80 })
  email: string;
  @Column({ type: 'date' })
  birthday: Date;
  @Column({ length: 40, default: 'enabled' })
  status: string;
  @Column({ length: 100, name: 'referred_code' })
  referredCode: string;
  @Column({ length: 100, name: 'profile_photo_url', default: '' })
  profilePhotoUrl: string;
  @Column({ length: 100, name: 'identity_front_url', default: '' })
  identityFrontUrl: string;
  @Column({ length: 100, name: 'identity_back_url', default: '' })
  identityBackUrl: string;
  @Column({ length: 250, name: 'token_notification', default: '' })
  tokenNotification: string;
  //relations
  @Column({ name: 'city_id' })
  cityId: string;
  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
