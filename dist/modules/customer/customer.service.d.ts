import { CrudService } from '../../utils/crud.service';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';
import { CreateCustomerDto } from './dtos/create-customer.dto';
export declare class CustomerService extends CrudService<Customer, CreateCustomerDto> {
    private customerRepository;
    constructor(customerRepository: CustomerRepository);
    findByEmail(email: string): Promise<Customer>;
    findByPhone(phone: string): Promise<Customer>;
}
