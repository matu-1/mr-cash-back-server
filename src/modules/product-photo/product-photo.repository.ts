import { EntityRepository, Repository } from 'typeorm';
import { ProductPhoto } from './product-photo.entity';

@EntityRepository(ProductPhoto)
export class ProductPhotoRepository extends Repository<ProductPhoto> {}
