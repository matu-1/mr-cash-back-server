import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { CustomerService } from '../customer/customer.service';
import { Coupon } from './coupon.entity';
import { CouponRepository } from './coupon.repository';
import { CreateCouponDto } from './dtos/create-coupon.dto';

@Injectable()
export class CouponService extends CrudService<Coupon, CreateCouponDto> {
  constructor(
    private couponRepository: CouponRepository,
    private customerService: CustomerService,
  ) {
    super(couponRepository);
  }

  async create(dto: CreateCouponDto) {
    await this.customerService.findById(dto.customerId, 'Customer Not found');
    // TODO: VALIDAR QUE NO SEA EL MISMO CODIGO REFERIDO DE SU CUENTA Y QUE NO SEA UN CODIGO YA ASIGNADO
    return super.create(dto);
  }

  async findByCode(code: string) {
    const result = await this.couponRepository.manager.query(
      `SELECT name FROM customer WHERE referred_code = "${code}" LIMIT 1;`,
    );
    return result[0];
  }
}
