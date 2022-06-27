import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';
import { CREDIT_STATUS } from '../credit.constant';

export class UpdateCreditStatusDto {
  @IsIn([
    CREDIT_STATUS.CANCELLED,
    CREDIT_STATUS.ACCEPTED,
    CREDIT_STATUS.WAITING,
    CREDIT_STATUS.PREAPPROVED,
    CREDIT_STATUS.APPROVED,
    CREDIT_STATUS.EXPIRED,
    CREDIT_STATUS.REJECTED,
  ])
  status: number;
  @ApiProperty({ readOnly: true })
  urlContract: string;
}
