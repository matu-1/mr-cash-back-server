import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from 'src/utils/crud.controller';
import { Response } from 'src/utils/response';
import { Banner } from './banner.entity';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dtos/create-banner.dto';
import { UpdateBannerDto } from './dtos/update-banner.dto';

@ApiTags('Banner')
@Controller('banner')
export class BannerController extends CrudController<Banner> {
  constructor(private bannerService: BannerService) {
    super(bannerService);
  }

  @Post()
  async create(@Body() dto: CreateBannerDto) {
    const result = await this.bannerService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateBannerDto,
  ) {
    const result = await this.bannerService.update(id, dto);
    return new Response(result);
  }
}
