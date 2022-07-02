import { BaseEntity } from 'src/utils/base.entity';
import { Credit } from '../credit/credit.entity';
export declare class Delivery extends BaseEntity {
    latitude: number;
    longitude: number;
    address: string;
    reference: string;
    amount: number;
    creditId: string;
    credit: Credit;
}
