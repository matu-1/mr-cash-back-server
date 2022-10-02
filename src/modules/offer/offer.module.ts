import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferRepository } from './offer.repository';
import { CustomerModule } from '../customer/customer.module';
import { BankAccountModule } from '../bank-account/bank-account.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([OfferRepository]),
    CustomerModule,
    BankAccountModule,
  ],
  providers: [OfferService],
  controllers: [OfferController],
  exports: [OfferService],
})
export class OfferModule {}
