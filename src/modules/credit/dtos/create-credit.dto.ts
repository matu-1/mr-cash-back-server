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
import { CONFIG } from 'src/constants/config';
import { PLAN } from '../credit.constant';
import { Warranty } from './warranty.dto';

export class CreateCreditDto {
  @IsNumber()
  @Min(CONFIG.CREDIT.MIN_AMOUNT)
  @Max(CONFIG.CREDIT.MAX_AMOUNT)
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
  numberId: number;
  @ApiProperty({ readOnly: true })
  deliveryAmount: number;
  @ApiProperty({ readOnly: true })
  percentageServiceFee: number;
  @ApiProperty({ readOnly: true })
  percentageInterest: number;
  @ApiProperty({ readOnly: true })
  percentageStorage: number = CONFIG.PERCENTAGE_STORAGE;
  @IsUUID()
  customerId: string;
  @IsUUID()
  bankAccountId: string;
  @ApiProperty({ readOnly: true })
  creditPreviousId: string;
  @IsIn([0, 1])
  expressDisbursement: number;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => Warranty)
  warranties: Warranty[];
}
