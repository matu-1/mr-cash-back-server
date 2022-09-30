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
import { Provider } from './provider.entity';
import { ProviderService } from './provider.service';
import { UpdateProviderDto } from './dtos/update-provider.dto';
import { CreateProviderDto } from './dtos/create-provider.dto';
import { Response } from 'src/utils/response';

@ApiTags('Provider')
@Controller('provider')
export class ProviderController extends CrudController<Provider> {
  constructor(private providerService: ProviderService) {
    super(providerService);
  }

  @Post()
  async create(@Body() dto: CreateProviderDto) {
    const result = await this.providerService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateProviderDto,
  ) {
    const result = await this.providerService.update(id, dto);
    return new Response(result);
  }
}
