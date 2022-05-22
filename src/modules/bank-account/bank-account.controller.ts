import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { BankAccount } from './bank-account.entity';
import { ApiTags } from '@nestjs/swagger';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dtos/create-bank-account.dto';
import { UpdateBankAccountDto } from './dtos/update-bank-account.dto';
import { Response } from '../../utils/response';

@ApiTags('Bank Account')
@Controller('bank-account')
export class BankAccountController extends CrudController<BankAccount> {
  constructor(private bankAccountService: BankAccountService) {
    super(bankAccountService);
  }

  @Post()
  async create(@Body() dto: CreateBankAccountDto) {
    const result = await this.bankAccountService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateBankAccountDto,
  ) {
    const result = await this.bankAccountService.update(id, dto);
    return new Response(result);
  }
}
