import { BaseEntity } from 'src/utils/base.entity';
import { Credit } from '../credit/credit.entity';
import { Coupon } from '../coupon/coupon.entity';
export declare class CreditFee extends BaseEntity {
    amount: number;
    amountPaid: number;
    amountCoupon: number;
    paymentMethod: number;
    status: number;
    paymentDate: Date;
    paidAt: Date;
    creditId: string;
    couponId: string;
    credit: Credit;
    coupon: Coupon;
}
