import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Response } from 'src/utils/response';
import { UpdateProductDto } from './dtos/update-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController extends CrudController<Product> {
  constructor(private productService: ProductService) {
    super(productService);
  }

  @Post()
  async create(@Body() dto: CreateProductDto) {
    const result = await this.productService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProductDto,
  ) {
    const result = await this.productService.update(id, dto);
    return new Response(result);
  }
}
