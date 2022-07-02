import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Response } from 'src/utils/response';
import { Delivery } from './delivery.entity';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryDto } from './dtos/create-delivery.dto';

@ApiTags('Delivery')
@Controller('delivery')
export class DeliveryController extends CrudController<Delivery> {
  constructor(private deliveryService: DeliveryService) {
    super(deliveryService);
  }

  @Post()
  async create(@Body() body: CreateDeliveryDto) {
    const result = await this.deliveryService.create(body);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Get delivery by credit' })
  @Get('/credit/:id')
  async findByCredit(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.deliveryService.findByCredit(id);
    return new Response(result);
  }
}
