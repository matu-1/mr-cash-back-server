import { CrudController } from '../../utils/crud.controller';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { Response } from 'src/utils/response';
export declare class CustomerController extends CrudController<Customer> {
    private customerService;
    constructor(customerService: CustomerService);
    create(dto: CreateCustomerDto): Promise<Response>;
    update(id: string, dto: UpdateCustomerDto): Promise<Response>;
    findByEmail(email: string): Promise<Response>;
    findByPhone(phone: string): Promise<Response>;
}
