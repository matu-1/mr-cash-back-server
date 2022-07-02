import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CrudController } from 'src/utils/crud.controller';
import { Coupon } from './coupon.entity';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dtos/create-coupon.dto';
import { Response } from 'src/utils/response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Coupon')
@Controller('coupon')
export class CouponController extends CrudController<Coupon> {
  constructor(private couponService: CouponService) {
    super(couponService);
  }

  @Post()
  async create(@Body() body: CreateCouponDto) {
    const result = await this.couponService.create(body);
    return new Response(result);
  }

  @Get('referred-code/:code')
  async findByCode(@Param('code') code: string) {
    const result = await this.couponService.findByCode(code);
    return new Response(result);
  }
}
