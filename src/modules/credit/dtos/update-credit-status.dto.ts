import { IsIn } from 'class-validator';
import { CREDIT_STATUS } from '../credit.constant';

export class UpdateCreditStatusDto {
  @IsIn([
    CREDIT_STATUS.CANCELLED,
    CREDIT_STATUS.EXPIRED,
    CREDIT_STATUS.REJECTED,
    CREDIT_STATUS.APPROVED,
  ])
  status: number;
}
