import { Controller } from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Customer } from './customer.entity';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController extends CrudController<Customer> {
  constructor(private customerService: CustomerService) {
    super(customerService);
  }
}
