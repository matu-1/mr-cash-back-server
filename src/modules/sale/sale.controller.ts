import {
  Body,
  Controller,
  Post,
  ParseUUIDPipe,
  Put,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Sale } from './sale.entity';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dtos/create-sale.dto';
import { Response } from 'src/utils/response';
import { UpdateSaleDto } from './dtos/update-sale.dto';

@ApiTags('Sale')
@Controller('sale')
export class SaleController extends CrudController<Sale> {
  constructor(private saleService: SaleService) {
    super(saleService);
  }

  @Post()
  async create(@Body() dto: CreateSaleDto) {
    const result = await this.saleService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateSaleDto,
  ) {
    const result = await this.saleService.update(id, dto);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Get sales by customer' })
  @Get('customer/:id')
  async findByCustomer(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('limit') limit?: number,
  ) {
    const result = await this.saleService.findByCustomer(id, limit);
    return new Response(result);
  }
}
