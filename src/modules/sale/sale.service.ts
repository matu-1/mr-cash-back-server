import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dtos/create-sale.dto';
import { SaleRepository } from './sale.repository';
import { CustomerService } from '../customer/customer.service';
import { MessageException } from '../../constants/message-exception';
import { ProductSale } from '../product-sale/product-sale.entity';

@Injectable()
export class SaleService extends CrudService<Sale, CreateSaleDto> {
  constructor(
    private saleRepository: SaleRepository,
    private customerService: CustomerService,
  ) {
    super(saleRepository);
  }

  async findById(id: string, errorMessage = MessageException.NOT_FOUND) {
    return this.findByIdWithRelations(
      id,
      [
        'customer',
        'delivery',
        'products',
        'products.photos',
        'products.categoryOffer',
        'products.provider',
      ],
      errorMessage,
    );
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
