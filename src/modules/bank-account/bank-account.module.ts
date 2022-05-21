import { Module } from '@nestjs/common';
import { BankAccountController } from './bank-account.controller';
import { BankAccountService } from './bank-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankAccountRepository } from './bank-account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BankAccountRepository])],
  controllers: [BankAccountController],
  providers: [BankAccountService],
})
export class BankAccountModule {}
