import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Sale } from './sale.entity';
import { CreateSaleDto } from './dtos/create-sale.dto';
import { SaleRepository } from './sale.repository';

@Injectable()
export class SaleService extends CrudService<Sale, CreateSaleDto> {
  constructor(private saleRepository: SaleRepository) {
    super(saleRepository);
  }
}
