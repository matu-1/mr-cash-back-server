import { Injectable, BadRequestException } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dtos/create-sale.dto';
import { SaleRepository } from './sale.repository';
import { CustomerService } from '../customer/customer.service';
import { MessageException } from '../../constants/message-exception';
import { ProductSale } from '../product-sale/product-sale.entity';
import { Product } from '../product/product.entity';
import { PRODUCT_STATUS } from '../product/product.constant';

@Injectable()
export class SaleService extends CrudService<Sale, CreateSaleDto> {
  constructor(
    private saleRepository: SaleRepository,
    private customerService: CustomerService,
  ) {
    super(saleRepository);
  }

  async findById(id: string, errorMessage = MessageException.NOT_FOUND) {
    return this.findByIdFull(id, {
      relations: [
        'sale.customer',
        'sale.delivery',
        'sale.products',
        'products.product',
        'product.photos',
        'product.categoryOffer',
        'product.provider',
      ],
      select: [
        'sale',
        'customer',
        'delivery',
        'products.id',
        'products.price',
        'products.quantity',
        'products.createdAt',
        'product',
        'photos.id',
        'categoryOffer.name',
        'provider.name',
      ],
      errorMessage,
    });
  }

  async findByCustomer(customerId: string, limit?: number) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    let query = this.saleRepository
      .createQueryBuilder('sale')
      .where('sale.customerId = :customerId', { customerId })
      .orderBy('sale.createdAt', 'DESC');
    if (limit) query = query.take(limit);
    return query.getMany();
  }

  async create(dto: CreateSaleDto) {
    await this.customerService.findById(
      dto.customerId,
      'The customer does not exist',
    );
    return this.saleRepository.manager.transaction(async (manager) => {
      const sale = await manager.save(Sale, dto);
      //update quantity o stock
      const products = await manager.findByIds(
        Product,
        dto.productsSale.map((item) => item.productId),
        { where: { status: PRODUCT_STATUS.TO_SELL } },
      );
      console.log(products.length);
      if (products.length != dto.productsSale.length)
        throw new BadRequestException('Some product does not exist');
      const productsToSave: any[] = [];
      for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const quantity = product.quantity - dto.productsSale[i].quantity;
        if (quantity < 0)
          throw new BadRequestException(
            `The product '${product.name}' is out of stock`,
          );
        productsToSave.push({
          id: product.id,
          quantity: quantity,
        });
      }
      await manager.save(Product, productsToSave);
      await manager.save(
        ProductSale,
        dto.productsSale.map((item) => ({
          ...item,
          saleId: sale.id,
        })),
      );
      return sale;
    });
  }
}
