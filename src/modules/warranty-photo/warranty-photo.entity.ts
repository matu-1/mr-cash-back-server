import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Warranty } from '../warranty/warranty.entity';

@Entity()
export class WarrantyPhoto extends BaseEntity {
  @Column({ name: 'photo_url', length: 150 })
  photoUrl: string;
  //relations
  @Column({ name: 'warranty_id' })
  warrantyId: string;
  @ManyToOne(() => Warranty)
  @JoinColumn({ name: 'warranty_id' })
  warranty: Warranty;
}
