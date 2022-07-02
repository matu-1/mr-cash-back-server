import { CrudController } from '../../utils/crud.controller';
import { BankAccount } from './bank-account.entity';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dtos/create-bank-account.dto';
import { UpdateBankAccountDto } from './dtos/update-bank-account.dto';
import { Response } from '../../utils/response';
export declare class BankAccountController extends CrudController<BankAccount> {
    private bankAccountService;
    constructor(bankAccountService: BankAccountService);
    findByCustomer(id: string): Promise<Response>;
    create(dto: CreateBankAccountDto): Promise<Response>;
    update(id: string, dto: UpdateBankAccountDto): Promise<Response>;
}
