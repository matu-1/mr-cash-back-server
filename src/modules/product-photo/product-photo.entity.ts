import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class ProductPhoto extends BaseEntity {
  @Column({ name: 'photo_url', length: 250 })
  photoUrl: string;
  //relations
  @Column({ name: 'product_id' })
  productId: string;
  @ManyToOne(() => Product, (product) => product.photos)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
