import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CrudController } from '../../utils/crud.controller';
import { Config } from './config.entity';
import { ConfigService } from './config.service';
import { CreateConfigDto } from './dtos/create-config.dto';
import { Response } from '../../utils/response';
import { UpdateConfigDto } from './dtos/update-config.dto';

@ApiTags('Config')
@Controller('config')
export class ConfigController extends CrudController<Config> {
  constructor(private configService: ConfigService) {
    super(configService);
  }

  @Post()
  async create(@Body() dto: CreateConfigDto) {
    const result = await this.configService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateConfigDto,
  ) {
    const result = await this.configService.update(id, dto);
    return new Response(result);
  }
}
