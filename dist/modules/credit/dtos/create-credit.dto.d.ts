import { Warranty } from './warranty.dto';
export declare class CreateCreditDto {
    originalAmount: number;
    totalAmount: number;
    balance: number;
    quantityFee: number;
    plan: number;
    status: number;
    deliveryAmount: number;
    percentageServiceFee: number;
    percentageInterest: number;
    customerId: string;
    bankAccountId: string;
    creditPreviousId: string;
    warranties: Warranty[];
}
