import { Module } from '@nestjs/common';
import { WarrantyService } from './warranty.service';
import { WarrantyController } from './warranty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarrantyRepository } from './warranty.repository';
import { CreditModule } from '../credit/credit.module';

@Module({
  imports: [TypeOrmModule.forFeature([WarrantyRepository]), CreditModule],
  providers: [WarrantyService],
  controllers: [WarrantyController],
})
export class WarrantyModule {}
