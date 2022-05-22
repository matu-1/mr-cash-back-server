import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Category extends BaseEntity {
  @Column({ length: 80 })
  type: string;
  @Column({ type: 'text', nullable: true })
  description: string;
}
