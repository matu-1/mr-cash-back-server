import { CrudService } from 'src/utils/crud.service';
import { BankAccount } from './bank-account.entity';
import { CreateBankAccountDto } from './dtos/create-bank-account.dto';
import { BankAccountRepository } from './bank-account.repository';
import { CustomerService } from '../customer/customer.service';
import { UpdateBankAccountDto } from './dtos/update-bank-account.dto';
export declare class BankAccountService extends CrudService<BankAccount, CreateBankAccountDto> {
    private bankAccountRepository;
    private customerService;
    constructor(bankAccountRepository: BankAccountRepository, customerService: CustomerService);
    findByCustomer(customerId: string): Promise<BankAccount[]>;
    create(dto: CreateBankAccountDto): Promise<BankAccount>;
    update(id: string, dto: UpdateBankAccountDto): Promise<BankAccount>;
}
