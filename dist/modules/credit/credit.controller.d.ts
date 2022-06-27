import { CrudController } from '../../utils/crud.controller';
import { Credit } from './credit.entity';
import { CreditService } from './credit.service';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { Response } from '../../utils/response';
import { UpdateCreditStatusDto } from './dtos/update-credit-status.dto';
import { OfferCreditDto } from './dtos/offer-credit.dto';
export declare class CreditController extends CrudController<Credit> {
    private creditService;
    constructor(creditService: CreditService);
    findByCustomer(id: string, limit?: number): Promise<Response>;
    create(dto: CreateCreditDto): Promise<Response>;
    offer(dto: OfferCreditDto): Promise<Response>;
    changeStatus(id: string, dto: UpdateCreditStatusDto): Promise<Response>;
    getTotalByStatus(): Promise<Response>;
}
