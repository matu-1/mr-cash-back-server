import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
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
import { DeliveryModule } from './modules/delivery/delivery.module';
import { EmailModule } from './modules/email/email.module';
import { ConfigModule } from './modules/config/config.module';
import { BannerModule } from './modules/banner/banner.module';
import { CategoryOfferModule } from './modules/category-offer/category-offer.module';
import { ProviderModule } from './modules/provider/provider.module';
import { OfferModule } from './modules/offer/offer.module';
import { ProductModule } from './modules/product/product.module';
import { ProductPhotoModule } from './modules/product-photo/product-photo.module';
import { SaleModule } from './modules/sale/sale.module';
import { ProductSaleModule } from './modules/product-sale/product-sale.module';
import { OfferStatusModule } from './modules/offer-status/offer-status.module';

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
    DeliveryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    EmailModule,
    ConfigModule,
    BannerModule,
    CategoryOfferModule,
    ProviderModule,
    OfferModule,
    ProductModule,
    ProductPhotoModule,
    SaleModule,
    ProductSaleModule,
    OfferStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
