import {
  Body,
  Controller,
  Post,
  ParseUUIDPipe,
  Param,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Offer } from './offter.entity';
import { OfferService } from './offer.service';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { UpdateOfferDto } from './dtos/update-offer.dto';
import { Response } from 'src/utils/response';

@ApiTags('Offer')
@Controller('offer')
export class OfferController extends CrudController<Offer> {
  constructor(private offerService: OfferService) {
    super(offerService);
  }

  @Post()
  async create(@Body() dto: CreateOfferDto) {
    const result = await this.offerService.create(dto);
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
}
