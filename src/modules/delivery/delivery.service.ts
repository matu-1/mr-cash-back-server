import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { CreditService } from '../credit/credit.service';
import { Delivery } from './delivery.entity';
import { DeliveryRepository } from './delivery.repository';
import { CreateDeliveryDto } from './dtos/create-delivery.dto';

@Injectable()
export class DeliveryService extends CrudService<Delivery, CreateDeliveryDto> {
  constructor(
    private deliveryRepository: DeliveryRepository,
    private creditService: CreditService,
  ) {
    super(deliveryRepository);
  }

  async create(dto: CreateDeliveryDto) {
    await this.creditService.findById(dto.creditId, 'Credit Not found');
    return super.create(dto);
  }
}
