import { IsNumber, IsUUID, MinLength } from 'class-validator';

export class CreateCouponDto {
  @MinLength(3)
  name: string;
  @MinLength(10)
  description: string;
  @IsNumber()
  amount: number;
  @IsUUID()
  customerId: string;
}
