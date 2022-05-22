import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Credit } from './credit.entity';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { CreditRepository } from './credit.repository';
import { CustomerService } from '../customer/customer.service';
import { BankAccountService } from '../bank-account/bank-account.service';

@Injectable()
export class CreditService extends CrudService<Credit, CreateCreditDto> {
  constructor(
    private creditRepository: CreditRepository,
    private customerService: CustomerService,
    private bankAccountService: BankAccountService,
  ) {
    super(creditRepository);
  }

  async create(dto: CreateCreditDto) {
    await this.customerService.findById(
      dto.customerId,
      'The customer does not exist',
    );
    await this.bankAccountService.findById(
      dto.bankAccountId,
      'The bank Account does not exist',
    );
    //TODO: Aplicar logica de credito
    return super.create(dto);
  }
}
