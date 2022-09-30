import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Provider extends BaseEntity {
  @Column({ length: 60 })
  name: string;
  @Column({ type: 'tinyint', name: 'percentage_commission' })
  percentageCommission: number;
}
