import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditService } from '../credit/credit.service';

@Injectable()
export class CreditFeeService extends CrudService<CreditFee, any> {
  constructor(
    private creditFeeRepository: CreditFeeRepository,
    private creditService: CreditService,
  ) {
    super(creditFeeRepository);
  }

  async findByCredit(creditId: string) {
    await this.creditService.findById(creditId, 'The credit does not exist');
    return this.creditFeeRepository.find({
      where: { creditId },
      order: { paymentDate: 'ASC' },
    });
  }
}
