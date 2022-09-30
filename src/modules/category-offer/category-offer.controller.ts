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
import { CategoryOffer } from './category-offer.entity';
import { CategoryOfferService } from './category-offer.service';
import { UpdateCategoryOfferDto } from './dtos/update-category-offer.dto';
import { CreateCategoryOfferDto } from './dtos/create-category-offer.dto';
import { Response } from 'src/utils/response';

@ApiTags('Category Offer')
@Controller('category-offer')
export class CategoryOfferController extends CrudController<CategoryOffer> {
  constructor(private categoryOfferService: CategoryOfferService) {
    super(categoryOfferService);
  }

  @Post()
  async create(@Body() dto: CreateCategoryOfferDto) {
    const result = await this.categoryOfferService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCategoryOfferDto,
  ) {
    const result = await this.categoryOfferService.update(id, dto);
    return new Response(result);
  }
}
