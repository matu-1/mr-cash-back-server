import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  ParseUUIDPipe,
  Get,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Customer } from './customer.entity';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { Response } from 'src/utils/response';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController extends CrudController<Customer> {
  constructor(private customerService: CustomerService) {
    super(customerService);
  }

  @Post()
  async create(@Body() dto: CreateCustomerDto) {
    const result = await this.customerService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    const result = await this.customerService.update(id, dto);
    return new Response(result);
  }

  @Get('email/:email')
  async findByEmail(@Param('email') email: string) {
    const result = await this.customerService.findByEmail(email);
    return new Response(result);
  }

  @Get('phone/:phone')
  async findByPhone(@Param('phone') phone: string) {
    const result = await this.customerService.findByPhone(phone);
    return new Response(result);
  }
}
