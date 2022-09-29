import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';

@Entity()
export class Banner extends BaseEntity {
  @Column({ name: 'photo_url' })
  photoUrl: string;
  @Column({ type: 'tinyint' })
  type: number; //[?, ?]
  @Column({ type: 'text', nullable: true })
  description: string;
}
