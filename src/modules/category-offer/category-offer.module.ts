import { Module } from '@nestjs/common';
import { CategoryOfferService } from './category-offer.service';
import { CategoryOfferController } from './category-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryOfferRepository } from './category-offer.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOfferRepository])],
  providers: [CategoryOfferService],
  controllers: [CategoryOfferController],
  exports: [CategoryOfferService],
})
export class CategoryOfferModule {}
