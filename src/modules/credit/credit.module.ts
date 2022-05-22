import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditRepository } from './credit.repository';
import { CustomerModule } from '../customer/customer.module';
import { BankAccountModule } from '../bank-account/bank-account.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CreditRepository]),
    CustomerModule,
    BankAccountModule,
  ],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
