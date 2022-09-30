import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class CategoryOffer extends BaseEntity {
  @Column({ length: 80 })
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;
}
