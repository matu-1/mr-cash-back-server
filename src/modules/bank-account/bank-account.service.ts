import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { BankAccount } from './bank-account.entity';
import { CreateBankAccountDto } from './dtos/create-bank-account.dto';
import { BankAccountRepository } from './bank-account.repository';

@Injectable()
export class BankAccountService extends CrudService<
  BankAccount,
  CreateBankAccountDto
> {
  constructor(private bankAccountRepository: BankAccountRepository) {
    super(bankAccountRepository);
  }
}
