import {
  Controller,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
  Put,
  Get,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Credit } from './credit.entity';
import { CreditService } from './credit.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { Response } from '../../utils/response';
import { UpdateCreditStatusDto } from './dtos/update-credit-status.dto';
import { OfferCreditDto } from './dtos/offer-credit.dto';

@ApiTags('Credit')
@Controller('credit')
export class CreditController extends CrudController<Credit> {
  constructor(private creditService: CreditService) {
    super(creditService);
  }

  @ApiOperation({ summary: 'Get credits by customer' })
  @Get('customer/:id')
  async findByCustomer(@Param('id', ParseUUIDPipe) id: string) {
    const result = await this.creditService.findByCustomer(id);
    return new Response(result);
  }

  @Post()
  async create(@Body() dto: CreateCreditDto) {
    const result = await this.creditService.create(dto);
    return new Response(result);
  }

  @Post('offer')
  async offer(@Body() dto: OfferCreditDto) {
    const result = await this.creditService.offer(dto);
    return new Response(result);
  }

  @Put('change-status/:id')
  async changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCreditStatusDto,
  ) {
    const result = await this.creditService.changeStatus(id, dto);
    return new Response(result);
  }
}
