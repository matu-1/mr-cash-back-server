import { Controller, Post, Body } from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Credit } from './credit.entity';
import { CreditService } from './credit.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { Response } from '../../utils/response';

@ApiTags('Credit')
@Controller('credit')
export class CreditController extends CrudController<Credit> {
  constructor(private creditService: CreditService) {
    super(creditService);
  }

  @Post()
  async create(@Body() dto: CreateCreditDto) {
    const result = await this.creditService.create(dto);
    return new Response(result);
  }
}
