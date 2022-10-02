import {
  Body,
  Controller,
  Post,
  ParseUUIDPipe,
  Param,
  Put,
  Query,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Offer } from './offter.entity';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { Response } from 'src/utils/response';
import { User } from 'src/decorators/user.decorator';
import { OfferOfferDto } from './dtos/offer-offer.dto';
import { UpdateOfferStatusDto } from './dtos/update-offer-status.dto';

@ApiTags('Offer')
@Controller('offer')
export class OfferController extends CrudController<Offer> {
  constructor(private offerService: OfferService) {
    super(offerService);
  }

  @Post()
  async create(@Body() dto: CreateOfferDto, @User('id') userId: string) {
    const result = await this.offerService.create(dto, userId);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateOfferDto,
  ) {
    const result = await this.offerService.update(id, dto);
    return new Response(result);
  }

  @Post('offer')
  async offer(@Body() dto: OfferOfferDto, @User('id') userId: string) {
    const result = await this.offerService.offer(dto, userId);
    return new Response(result);
  }

  @Put('change-status/:id')
  async changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateOfferStatusDto,
    @User('id') userId: string,
  ) {
    const result = await this.offerService.changeStatus(id, dto, userId);
    return new Response(result);
  }

  @ApiOperation({ summary: 'Get offers by customer' })
  @Get('customer/:id')
  async findByCustomer(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('limit') limit?: number,
  ) {
    const result = await this.offerService.findByCustomer(id, limit);
    return new Response(result);
  }
}
