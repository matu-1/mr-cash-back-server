import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CityModule } from './modules/city/city.module';
import { BankAccountModule } from './modules/bank-account/bank-account.module';
import { CustomerModule } from './modules/customer/customer.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { CategoryModule } from './modules/category/category.module';
import { CreditModule } from './modules/credit/credit.module';
import { WarrantyModule } from './modules/warranty/warranty.module';
import { WarrantyPhotoModule } from './modules/warranty-photo/warranty-photo.module';
import { CreditStatusModule } from './modules/credit-status/credit-status.module';
import { CreditFeeModule } from './modules/credit-fee/credit-fee.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    CityModule,
    BankAccountModule,
    CustomerModule,
    CouponModule,
    CategoryModule,
    CreditModule,
    WarrantyModule,
    WarrantyPhotoModule,
    CreditStatusModule,
    CreditFeeModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
