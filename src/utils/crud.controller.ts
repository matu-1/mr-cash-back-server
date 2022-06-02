import { CrudService } from './crud.service';
import { BaseEntity } from './base.entity';
import { Delete, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { Response } from 'src/utils/response';
import { ApiOperation } from '@nestjs/swagger';
import { DateUtils } from './date';

//post y put no funciona bien
export class CrudController<TEntity extends BaseEntity> {
  constructor(private service: CrudService<TEntity, any>) {}

  @ApiOperation({ summary: 'Record list' })
  @Get()
  async findAll() {
    const result = await this.service.findAll();
    return new Response(result);
  }

  @ApiOperation({ summary: 'Record list by date range' })
  @Get('range')
  async findAllByRange(
    @Query('start') start: string,
    @Query('end') end: string,
  ) {
    const startDate = start ? new Date(start) : DateUtils.getMinToday();
    const endDate = end ? new Date(end) : DateUtils.getMaxToday();
    const result = await this.service.findAllByRange(startDate, endDate);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Get by id' })
  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.service.findById(id);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Remove' })
  @Delete(':id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.service.remove(id);
    return new Response(result);
  }
}
