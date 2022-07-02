import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';
export declare class Coupon extends BaseEntity {
    name: string;
    description: string;
    status: number;
    amount: number;
    customerId: string;
    customer: Customer;
}
