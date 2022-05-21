import {
  Controller,
  Post,
  Put,
  ParseUUIDPipe,
  Param,
  Body,
} from '@nestjs/common';
import { Response } from 'src/utils/response';
import { CityService } from './city.service';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from '../../utils/crud.controller';
import { City } from './city.entity';
import { CreateCityDto } from './dtos/create-city.dto';
import { UpdateCityDto } from './dtos/update-city.dto';

@ApiTags('City')
@Controller('city')
export class CityController extends CrudController<City> {
  constructor(private cityService: CityService) {
    super(cityService);
  }

  @Post()
  async create(@Body() body: CreateCityDto) {
    const result = await this.cityService.create(body);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateCityDto,
  ) {
    const result = await this.cityService.update(id, body);
    return new Response(result);
  }
}
