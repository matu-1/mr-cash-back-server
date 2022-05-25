import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Body,
  Put,
  Post,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Warranty } from './warranty.entity';
import { WarrantyService } from './warranty.service';
import { Response } from '../../utils/response';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateWarrantyDto } from './dtos/create-warranty.dto';
import { UpdateWarrantyDto } from './dtos/update-warranty.dto';

@ApiTags('Warranty')
@Controller('warranty')
export class WarrantyController extends CrudController<Warranty> {
  constructor(private warrantyService: WarrantyService) {
    super(warrantyService);
  }

  @Post()
  async create(@Body() dto: CreateWarrantyDto) {
    const result = await this.warrantyService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateWarrantyDto,
  ) {
    const result = await this.warrantyService.update(id, dto);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Get warranties by creditId' })
  @Get('credit/:id')
  async findByCredit(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.warrantyService.findByCredit(id);
    return new Response(result);
  }
}
