import { Controller } from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { BankAccount } from './bank-account.entity';
import { ApiTags } from '@nestjs/swagger';
import { BankAccountService } from './bank-account.service';

@ApiTags('Bank Account')
@Controller('bank-account')
export class BankAccountController extends CrudController<BankAccount> {
  constructor(private bankAccountService: BankAccountService) {
    super(bankAccountService);
  }
}
