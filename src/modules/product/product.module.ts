import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from './product.repository';
import { CategoryOfferModule } from '../category-offer/category-offer.module';
import { ProviderModule } from '../provider/provider.module';
import { OfferModule } from '../offer/offer.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductRepository]),
    CategoryOfferModule,
    ProviderModule,
    OfferModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
