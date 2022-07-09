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
import { Query } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';

@ApiTags('Credit')
@Controller('credit')
export class CreditController extends CrudController<Credit> {
  constructor(private creditService: CreditService) {
    super(creditService);
  }

  @ApiOperation({ summary: 'Get credits by customer' })
  @Get('customer/:id')
  async findByCustomer(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('limit') limit?: number,
  ) {
    const result = await this.creditService.findByCustomer(id, limit);
    return new Response(result);
  }

  @Post()
  async create(@Body() dto: CreateCreditDto, @User('id') userId: string) {
    const result = await this.creditService.create(dto, userId);
    return new Response(result);
  }

  @Post('offer')
  async offer(@Body() dto: OfferCreditDto, @User('id') userId: string) {
    const result = await this.creditService.offer(dto, userId);
    return new Response(result);
  }

  @Put('change-status/:id')
  async changeStatus(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCreditStatusDto,
    @User('id') userId: string,
  ) {
    const result = await this.creditService.changeStatus(id, dto, userId);
    return new Response(result);
  }

  @Get('calculate-credit/:plan/:amount')
  async calculateCredit(
    @Param('plan') plan: number,
    @Param('amount') amount: number,
  ) {
    const dto = new CreateCreditDto();
    dto.originalAmount = Number(amount);
    dto.plan = Number(plan);
    const result = this.creditService.calculateCredit(dto);
    return new Response(result);
  }

  @ApiOperation({
    summary: 'Get quality Indicators',
  })
  @Get('quality-indicators')
  async getQualityIndicators() {
    const result = await this.creditService.getQualityIndicators();
    return new Response(result);
  }

  @ApiOperation({
    summary: 'Get quality Indicators',
  })
  @Get('quality-indicators-annual')
  async getQualityIndicatorsAnnual() {
    const result = await this.creditService.getQualityIndicatorsAnnual();
    return new Response(result);
  }

  @ApiOperation({
    summary: 'Get Total by Status (Active, Canceled, Expired, Complete)',
  })
  @Get('total-by-status')
  async getTotalByStatus() {
    const result = await this.creditService.getTotalByStatus();
    return new Response(result);
  }

  @ApiOperation({
    summary: 'Get liquidated warranties (Expired)',
  })
  @Get('liquidated-warranties')
  async getLiquidatedWarranties() {
    const result = await this.creditService.getLiquidatedWarranties();
    return new Response(result);
  }
}
