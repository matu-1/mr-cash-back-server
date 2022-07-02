import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';
export declare class BankAccount extends BaseEntity {
    holder: string;
    accountNumber: string;
    bankName: string;
    identityNumber: string;
    accountType: string;
    customerId: string;
    customer: Customer;
}
