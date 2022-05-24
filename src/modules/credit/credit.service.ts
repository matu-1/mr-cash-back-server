import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Credit } from './credit.entity';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { CreditRepository } from './credit.repository';
import { CustomerService } from '../customer/customer.service';
import { BankAccountService } from '../bank-account/bank-account.service';
import { CONFIG } from '../../constants/config';

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
    if (dto.originalAmount >= 300 && dto.originalAmount <= 999) {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MAX;
      dto.percentageInterest = CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.PERCENTAGE;
      dto.quantityFee = CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.QUANTITY;
    } else {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MIN;
      dto.percentageInterest =
        CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.PERCENTAGE;
      dto.quantityFee = CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.QUANTITY;
      dto.deliveryAmount = 0;
    }
    const serviceFee = (dto.originalAmount * dto.percentageServiceFee) / 100;
    const interest = (dto.originalAmount * dto.percentageInterest) / 100;
    dto.totalAmount = dto.originalAmount + serviceFee + interest;
    //TODO: registrar garantias
    return super.create(dto);
  }
}
