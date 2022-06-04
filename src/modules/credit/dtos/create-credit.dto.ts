import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsNumber,
  IsUUID,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { PLAN } from '../credit.constant';
import { Warranty } from './warranty.dto';

export class CreateCreditDto {
  @IsNumber()
  @Min(300)
  @Max(2000)
  originalAmount: number;
  @ApiProperty({ readOnly: true })
  totalAmount: number;
  @ApiProperty({ readOnly: true })
  balance: number;
  @ApiProperty({ readOnly: true })
  quantityFee: number;
  @IsIn([PLAN.WEEKLY, PLAN.MONTHLY])
  plan: number;
  @ApiProperty({ readOnly: true })
  status: number;
  @ApiProperty({ readOnly: true })
  deliveryAmount: number;
  @ApiProperty({ readOnly: true })
  percentageServiceFee: number;
  @ApiProperty({ readOnly: true })
  percentageInterest: number;
  @IsUUID()
  customerId: string;
  @IsUUID()
  bankAccountId: string;
  @ApiProperty({ readOnly: true })
  creditPreviousId: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Warranty)
  warranties: Warranty[];
}
