import { CrudService } from 'src/utils/crud.service';
import { CustomerService } from '../customer/customer.service';
import { Coupon } from './coupon.entity';
import { CouponRepository } from './coupon.repository';
import { CreateCouponDto } from './dtos/create-coupon.dto';
export declare class CouponService extends CrudService<Coupon, CreateCouponDto> {
    private couponRepository;
    private customerService;
    constructor(couponRepository: CouponRepository, customerService: CustomerService);
    create(dto: CreateCouponDto): Promise<Coupon>;
    findByCode(code: string): Promise<any>;
}
