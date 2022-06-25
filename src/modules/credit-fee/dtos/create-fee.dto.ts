import {
  IsDateString,
  IsIn,
  IsNumber,
  IsOptional,
  IsUUID,
  Min,
} from 'class-validator';
import { FeeStatus, PaymentMethod } from '../credit-fee.enum';

export class CreateFeeDto {
  @IsNumber()
  @Min(0)
  amount: number;
  @IsOptional()
  @IsNumber()
  @Min(0)
  amountPaid: number;
  @IsNumber()
  @Min(0)
  amountCoupon: number;
  @IsIn(Object.values(PaymentMethod))
  paymentMethod: number;
  @IsIn(Object.values(FeeStatus))
  status: number;
  @IsDateString()
  paymentDate: Date;
  @IsOptional()
  @IsDateString()
  paidAt: Date;
  @IsUUID()
  creditId: string;
  @IsOptional()
  @IsUUID()
  couponId: string;
}
