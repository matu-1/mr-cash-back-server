import { CrudService } from 'src/utils/crud.service';
import { CreditService } from '../credit/credit.service';
import { Delivery } from './delivery.entity';
import { DeliveryRepository } from './delivery.repository';
import { CreateDeliveryDto } from './dtos/create-delivery.dto';
export declare class DeliveryService extends CrudService<Delivery, CreateDeliveryDto> {
    private deliveryRepository;
    private creditService;
    constructor(deliveryRepository: DeliveryRepository, creditService: CreditService);
    create(dto: CreateDeliveryDto): Promise<Delivery>;
    findByCredit(creditId: string): Promise<Delivery>;
}
