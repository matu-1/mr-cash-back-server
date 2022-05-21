import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class City extends BaseEntity {
  @Column({ length: 100 })
  name: string;
}
