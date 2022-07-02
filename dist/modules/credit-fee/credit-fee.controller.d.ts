import { CrudController } from '../../utils/crud.controller';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeService } from './credit-fee.service';
import { Response } from 'src/utils/response';
import { UpdateFeeDto } from './dtos/update-fee.dto';
export declare class CreditFeeController extends CrudController<CreditFee> {
    private creditFeeService;
    constructor(creditFeeService: CreditFeeService);
    findByCredit(id: string): Promise<Response>;
    update(id: string, dto: UpdateFeeDto): Promise<Response>;
}
