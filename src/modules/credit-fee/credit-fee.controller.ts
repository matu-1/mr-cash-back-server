import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeService } from './credit-fee.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'src/utils/response';
import { UpdateFeeDto } from './dtos/update-fee.dto';

@ApiTags('Credit Fee')
@Controller('credit-fee')
export class CreditFeeController extends CrudController<CreditFee> {
  constructor(private creditFeeService: CreditFeeService) {
    super(creditFeeService);
  }

  @ApiOperation({ summary: 'Get credit fees by Credit' })
  @Get('credit/:id')
  async findByCredit(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.creditFeeService.findByCredit(id);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateFeeDto,
  ) {
    const result = await this.creditFeeService.update(id, dto);
    return new Response(result);
  }
}
