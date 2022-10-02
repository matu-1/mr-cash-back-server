import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { ProductPhoto } from './product-photo.entity';
import { CreateProductPhotoDto } from './dtos/create-product-photo.dto';
import { ProductPhotoRepository } from './product-photo.repository';
import { ProductService } from '../product/product.service';

@Injectable()
export class ProductPhotoService extends CrudService<
  ProductPhoto,
  CreateProductPhotoDto
> {
  constructor(
    private productPhotoRepository: ProductPhotoRepository,
    private productService: ProductService,
  ) {
    super(productPhotoRepository);
  }

  async create(dto: CreateProductPhotoDto) {
    await this.productService.findById(dto.photoUrl, 'The product not found');
    return super.create(dto);
  }

  findByProduct(id: string) {
    return this.productPhotoRepository.find({ where: { productId: id } });
  }
}
