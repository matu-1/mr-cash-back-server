import { CrudController } from 'src/utils/crud.controller';
import { Response } from 'src/utils/response';
import { Delivery } from './delivery.entity';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dtos/create-delivery.dto';
export declare class DeliveryController extends CrudController<Delivery> {
    private deliveryService;
    constructor(deliveryService: DeliveryService);
    create(body: CreateDeliveryDto): Promise<Response>;
    findByCredit(id: string): Promise<Response>;
}
