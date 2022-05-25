import { Module } from '@nestjs/common';
import { CreditFeeService } from './credit-fee.service';
import { CreditFeeController } from './credit-fee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditModule } from '../credit/credit.module';

@Module({
  imports: [TypeOrmModule.forFeature([CreditFeeRepository]), CreditModule],
  providers: [CreditFeeService],
  controllers: [CreditFeeController],
})
export class CreditFeeModule {}
