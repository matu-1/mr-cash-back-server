import { Module } from '@nestjs/common';
import { ProductPhotoService } from './product-photo.service';
import { ProductPhotoController } from './product-photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPhotoRepository } from './product-photo.repository';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductPhotoRepository]), ProductModule],
  providers: [ProductPhotoService],
  controllers: [ProductPhotoController],
})
export class ProductPhotoModule {}
