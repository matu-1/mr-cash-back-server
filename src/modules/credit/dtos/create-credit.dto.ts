import { IsIn, IsNumber, IsInt, IsUUID } from 'class-validator';
import { PLAN } from '../credit.constant';

export class CreateCreditDto {
  @IsNumber()
  originalAmount: number;
  // totalAmount: number;
  // balance: number;
  @IsInt()
  quantityFee: number;
  @IsIn([PLAN.WEEKLY, PLAN.MONTHLY])
  plan: number;
  // status: number;
  // deliveryAmount: number;
  @IsInt()
  percentageServiceFee: number;
  @IsInt()
  percentageInterest: number;
  @IsUUID()
  customerId: string;
  @IsUUID()
  bankAccountId: string;
  // creditPreviousId: string;
}
