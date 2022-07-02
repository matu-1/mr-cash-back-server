import { IsIn } from 'class-validator';
import { COUPON_STATUS } from '../coupon.constants';

export class UpdateCouponStatusDto {
  @IsIn([COUPON_STATUS.USED, COUPON_STATUS.EXPIRED])
  status: number;
}
