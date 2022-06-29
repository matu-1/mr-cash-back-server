import { Injectable, NotFoundException } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dtos/create-customer.dto';

@Injectable()
export class CustomerService extends CrudService<Customer, CreateCustomerDto> {
  constructor(private customerRepository: CustomerRepository) {
    super(customerRepository);
  }

  async findByEmail(email: string) {
    const data = await this.customerRepository.findOne({ where: { email } });
    if (!data) throw new NotFoundException('Customer not found');
    return data;
  }

  async findByPhone(phone: string) {
    const data = await this.customerRepository.findOne({ where: { phone } });
    if (!data) throw new NotFoundException('Customer not found');
    return data;
  }
}
