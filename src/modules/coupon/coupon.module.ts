import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from '../customer/customer.module';
import { CouponController } from './coupon.controller';
import { CouponRepository } from './coupon.repository';
import { CouponService } from './coupon.service';

@Module({
  imports: [TypeOrmModule.forFeature([CouponRepository]), CustomerModule],
  controllers: [CouponController],
  providers: [CouponService],
})
export class CouponModule {}
