import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { City } from '../city/city.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column({ length: 100 })
  name: string;
  @Column({ length: 10 })
  phone: string;
  @Column({ length: 80 })
  otp: string;
  @Column({ length: 40 })
  status: string;
  @Column({ length: 100 })
  referredCode: string;
  @Column({ length: 100 })
  profilePhotoUrl: string;
  @Column({ length: 100 })
  identityFrontUrl: string;
  @Column({ length: 100 })
  identityBackUrl: string;
  //relations
  @Column({ name: 'city_id' })
  cityId: string;
  @ManyToOne(() => City)
  @JoinColumn({ name: 'city_id' })
  city: City;
}
