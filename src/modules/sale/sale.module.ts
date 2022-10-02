import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleRepository } from './sale.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SaleRepository])],
  providers: [SaleService],
  controllers: [SaleController],
})
export class SaleModule {}
