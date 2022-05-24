import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Warranty } from './warranty.entity';
import { WarrantyService } from './warranty.service';
import { Response } from '../../utils/response';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Warranty')
@Controller('warranty')
export class WarrantyController extends CrudController<Warranty> {
  constructor(private warrantyService: WarrantyService) {
    super(warrantyService);
  }

  @ApiOperation({ summary: 'Get warranties by creditId' })
  @Get('credit/:id')
  async findByCredit(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.warrantyService.findByCredit(id);
    return new Response(result);
  }
}
