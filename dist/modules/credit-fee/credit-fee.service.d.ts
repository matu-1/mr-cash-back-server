import { CrudService } from '../../utils/crud.service';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditService } from '../credit/credit.service';
import { UpdateFeeDto } from './dtos/update-fee.dto';
export declare class CreditFeeService extends CrudService<CreditFee, any> {
    private creditFeeRepository;
    private creditService;
    constructor(creditFeeRepository: CreditFeeRepository, creditService: CreditService);
    findByCredit(creditId: string, verify?: boolean): Promise<CreditFee[]>;
    update(id: string, dto: UpdateFeeDto): Promise<any>;
}
