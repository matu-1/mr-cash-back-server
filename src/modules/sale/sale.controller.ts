import {
  Body,
  Controller,
  Post,
  ParseUUIDPipe,
  Put,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
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
}
