import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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

  @ApiOperation({ summary: 'Get by Type' })
  @Get('/type/:type')
  async findByType(@Param('type', ParseIntPipe) type: number) {
    const result = await this.bannerService.findByType(type);
    return new Response(result);
  }
}
