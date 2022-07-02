import { BaseEntity } from '../../utils/base.entity';
import { Credit } from '../credit/credit.entity';
export declare class CreditStatus extends BaseEntity {
    status: number;
    creditId: string;
    credit: Credit;
}
