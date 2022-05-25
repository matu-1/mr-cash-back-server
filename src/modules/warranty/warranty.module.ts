import { Module } from '@nestjs/common';
import { WarrantyService } from './warranty.service';
import { WarrantyController } from './warranty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarrantyRepository } from './warranty.repository';
import { CreditModule } from '../credit/credit.module';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([WarrantyRepository]),
    CreditModule,
    CategoryModule,
  ],
  providers: [WarrantyService],
  controllers: [WarrantyController],
})
export class WarrantyModule {}
