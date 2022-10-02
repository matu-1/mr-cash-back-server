import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CrudController } from 'src/utils/crud.controller';
import { ProductPhoto } from './product-photo.entity';
import { ProductPhotoService } from './product-photo.service';
import { CreateProductPhotoDto } from './dtos/create-product-photo.dto';
import { Response } from 'src/utils/response';
import { UpdateProductPhotoDto } from './dtos/update-product-photo.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Product Photo')
@Controller('product-photo')
export class ProductPhotoController extends CrudController<ProductPhoto> {
  constructor(private productPhotoService: ProductPhotoService) {
    super(productPhotoService);
  }

  @Post()
  async create(@Body() dto: CreateProductPhotoDto) {
    const result = await this.productPhotoService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductPhotoDto,
  ) {
    const result = await this.productPhotoService.update(id, dto);
    return new Response(result);
  }

  @Get('product/:id')
  async findByProduct(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.productPhotoService.findByProduct(id);
    return new Response(result);
  }
}
