import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../utils/base.entity';
import { Category } from '../category/category.entity';
import { Credit } from '../credit/credit.entity';
import { WarrantyPhoto } from '../warranty-photo/warranty-photo.entity';

@Entity()
export class Warranty extends BaseEntity {
  @Column({ length: 80 })
  brand: string;
  @Column({ length: 80 })
  model: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column({ type: 'decimal', precision: 16, scale: 2, nullable: true })
  value: number;
  //relations
  @Column({ name: 'category_id' })
  categoryId: string;
  @Column({ name: 'credit_id' })
  creditId: string;
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;
  @ManyToOne(() => Credit)
  @JoinColumn({ name: 'credit_id' })
  credit: Credit;
  @OneToMany(() => WarrantyPhoto, (photo) => photo.warranty)
  photos: WarrantyPhoto[];
}
