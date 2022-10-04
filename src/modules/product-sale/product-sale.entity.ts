import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/utils/base.entity';
import { Sale } from '../sale/sale.entity';
import { Product } from '../product/product.entity';

@Entity()
export class ProductSale extends BaseEntity {
  @Column({ type: 'decimal', precision: 16, scale: 2 })
  price: number;
  @Column({ type: 'tinyint' })
  quantity: number;
  //relations
  @Column({ name: 'sale_id' })
  saleId: string;
  @Column({ name: 'product_id' })
  productId: string;
  @ManyToOne(() => Sale, (sale) => sale.products)
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;
  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
