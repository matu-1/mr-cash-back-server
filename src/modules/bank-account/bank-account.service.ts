import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { BankAccount } from './bank-account.entity';
import { CreateBankAccountDto } from './dtos/create-bank-account.dto';
import { BankAccountRepository } from './bank-account.repository';
import { CustomerService } from '../customer/customer.service';
import { UpdateBankAccountDto } from './dtos/update-bank-account.dto';

@Injectable()
export class BankAccountService extends CrudService<
  BankAccount,
  CreateBankAccountDto
> {
  constructor(
    private bankAccountRepository: BankAccountRepository,
    private customerService: CustomerService,
  ) {
    super(bankAccountRepository);
  }

  async findByCustomer(customerId: string) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    return this.bankAccountRepository.find({
      where: { customerId },
    });
  }

  async create(dto: CreateBankAccountDto) {
    await this.customerService.findById(
      dto.customerId,
      'The customer does not exist',
    );
    return super.create(dto);
  }

  async update(id: string, dto: UpdateBankAccountDto) {
    if (dto.customerId)
      await this.customerService.findById(
        dto.customerId,
        'The customer does not exist',
      );
    return super.update(id, dto);
  }
}
