import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { ProductRepository } from './product.repository';
import { ProductPhoto } from '../product-photo/product-photo.entity';
import { CategoryOfferService } from '../category-offer/category-offer.service';
import { ProviderService } from '../provider/provider.service';
import { OfferService } from '../offer/offer.service';
import { UpdateProductDto } from './dtos/update-product.dto';

@Injectable()
export class ProductService extends CrudService<Product, CreateProductDto> {
  constructor(
    private productRepository: ProductRepository,
    private categoryOfferService: CategoryOfferService,
    private providerService: ProviderService,
    private offerService: OfferService,
  ) {
    super(productRepository);
  }

  async findAll(relations?: string[], status?: number) {
    const where: any = {};
    if (status) where.status = status;
    return this.productRepository.find({
      relations,
      where,
    });
  }

  async create(dto: CreateProductDto) {
    const dataPromise: Promise<any>[] = [
      this.categoryOfferService.findById(
        dto.categoryOfferId,
        'The category not found',
      ),
      this.providerService.findById(dto.providerId, 'The provider not found'),
    ];
    if (dto.offerId)
      dataPromise.push(
        this.offerService.findById(dto.offerId, 'The offer not found'),
      );
    await Promise.all(dataPromise);
    return this.productRepository.manager.transaction(async (manager) => {
      const { photosUrl, ...body } = dto;
      const product = await manager.save(Product, body);
      await manager.save(
        ProductPhoto,
        photosUrl.map((photoUrl) => ({
          photoUrl,
          productId: product.id,
        })),
      );
      return product;
    });
  }

  async update(id: string, dto: UpdateProductDto) {
    const dataPromise: Promise<any>[] = [];
    if (dto.categoryOfferId)
      dataPromise.push(
        this.categoryOfferService.findById(
          dto.categoryOfferId,
          'The category not found',
        ),
      );
    if (dto.providerId)
      dataPromise.push(
        this.providerService.findById(dto.providerId, 'The provider not found'),
      );
    if (dto.offerId)
      dataPromise.push(
        this.offerService.findById(dto.offerId, 'The offer not found'),
      );
    await Promise.all(dataPromise);
    return super.update(id, dto);
  }
}
