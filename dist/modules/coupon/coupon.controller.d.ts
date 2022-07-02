import { CrudController } from 'src/utils/crud.controller';
import { Coupon } from './coupon.entity';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dtos/create-coupon.dto';
import { Response } from 'src/utils/response';
export declare class CouponController extends CrudController<Coupon> {
    private couponService;
    constructor(couponService: CouponService);
    create(body: CreateCouponDto): Promise<Response>;
    findByCode(code: string): Promise<Response>;
}
