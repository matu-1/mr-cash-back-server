import { BaseEntity } from 'src/utils/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PRODUCT_STATUS } from './product.constant';
import { CategoryOffer } from '../category-offer/category-offer.entity';
import { Provider } from '../provider/provider.entity';
import { Offer } from '../offer/offter.entity';
import { ProductPhoto } from '../product-photo/product-photo.entity';

@Entity()
export class Product extends BaseEntity {
  @Column({ length: 100 })
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column({ type: 'tinyint', default: 1 })
  quantity: number;
  @Column({
    name: 'purchase_price',
    type: 'decimal',
    precision: 16,
    scale: 2,
  })
  purchasePrice: number;
  @Column({
    name: 'sale_price',
    type: 'decimal',
    precision: 16,
    scale: 2,
    nullable: true,
  })
  salePrice: number;
  @Column({ type: 'tinyint', default: PRODUCT_STATUS.ENABLED })
  status: number;
  //relations
  @Column({ name: 'category_offer_id' })
  categoryOfferId: string;
  @Column({ name: 'provider_id' })
  providerId: string;
  @Column({ name: 'offer_id', nullable: true })
  offerId: string;
  @ManyToOne(() => CategoryOffer)
  @JoinColumn({ name: 'category_offer_id' })
  categoryOffer: CategoryOffer;
  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;
  @ManyToOne(() => Offer)
  @JoinColumn({ name: 'offer_id' })
  offer: Offer;
  @OneToMany(() => ProductPhoto, (photo) => photo.product)
  photos: ProductPhoto[];
}
