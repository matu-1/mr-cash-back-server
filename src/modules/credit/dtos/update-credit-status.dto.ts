import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { CREDIT_STATUS } from '../credit.constant';

export class UpdateCreditStatusDto {
  @IsIn([
    CREDIT_STATUS.CANCELLED,
    CREDIT_STATUS.PREAPPROVED,
    CREDIT_STATUS.WAITING,
    CREDIT_STATUS.APPROVED,
    CREDIT_STATUS.DISBURSED,
    CREDIT_STATUS.EXPIRED,
    CREDIT_STATUS.REJECTED,
  ])
  status: number;
  @ApiProperty({ readOnly: true })
  urlContract: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  urlSignature: string;
  @ApiProperty({ readOnly: true })
  disburseAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  approvedPhotoUrl?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  disbursementPhotoUrl?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  reason?: string;
}
