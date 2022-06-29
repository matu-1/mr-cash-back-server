import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditModule } from '../credit/credit.module';
import { DeliveryController } from './delivery.controller';
import { DeliveryRepository } from './delivery.repository';
import { DeliveryService } from './delivery.service';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryRepository]), CreditModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
