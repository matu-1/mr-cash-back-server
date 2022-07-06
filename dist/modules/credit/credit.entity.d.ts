import { BaseEntity } from '../../utils/base.entity';
import { Customer } from '../customer/customer.entity';
import { BankAccount } from '../bank-account/bank-account.entity';
import { Warranty } from '../warranty/warranty.entity';
import { Delivery } from '../delivery/delivery.entity';
export declare class Credit extends BaseEntity {
    originalAmount: number;
    totalAmount: number;
    balance: number;
    quantityFee: number;
    plan: number;
    status: number;
    deliveryAmount: number;
    percentageServiceFee: number;
    percentageInterest: number;
    urlContract: string;
    urlSignature: string;
    customerId: string;
    bankAccountId: string;
    creditPreviousId: string;
    customer: Customer;
    bankAccount: BankAccount;
    creditPrevious: Credit;
    warranties: Warranty[];
    delivery: Delivery;
}
