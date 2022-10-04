import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  Get,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { Response } from 'src/utils/response';
import { UpdateProductDto } from './dtos/update-product.dto';
import { PRODUCT_STATUS } from './product.constant';

@ApiTags('Product')
@Controller('product')
export class ProductController extends CrudController<Product> {
  constructor(private productService: ProductService) {
    super(productService);
  }

  @ApiOperation({ summary: 'Record list' })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: Object.values(PRODUCT_STATUS),
  })
  @Get()
  async findAll(@Query('status') status?: number) {
    const result = await this.productService.findAll([], status);
    return new Response(result);
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
