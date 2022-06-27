import { CrudService } from '../../utils/crud.service';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditService } from '../credit/credit.service';
import { UpdateFeeDto } from './dtos/update-fee.dto';
export declare class CreditFeeService extends CrudService<CreditFee, any> {
    private creditFeeRepository;
    private creditService;
    constructor(creditFeeRepository: CreditFeeRepository, creditService: CreditService);
    findByCredit(creditId: string): Promise<CreditFee[]>;
    update(id: string, dto: UpdateFeeDto): Promise<{
        status?: number;
        amount?: number;
        amountPaid?: number;
        amountCoupon?: number;
        paymentMethod?: number;
        paymentDate?: Date;
        paidAt?: Date;
        couponId?: string;
        id: string;
    } & CreditFee>;
}
