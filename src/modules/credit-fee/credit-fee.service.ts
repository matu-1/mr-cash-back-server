import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditService } from '../credit/credit.service';
import { UpdateFeeDto } from './dtos/update-fee.dto';
import { Credit } from '../credit/credit.entity';
import { CREDIT_STATUS } from '../credit/credit.constant';
import { CreditStatus } from '../credit-status/credit-status.entity';
import { FeeStatus } from './credit-fee.enum';

@Injectable()
export class CreditFeeService extends CrudService<CreditFee, any> {
  constructor(
    private creditFeeRepository: CreditFeeRepository,
    private creditService: CreditService,
  ) {
    super(creditFeeRepository);
  }

  async findByCredit(creditId: string, verify = true) {
    if (verify)
      await this.creditService.findById(creditId, 'The credit does not exist');
    return this.creditFeeRepository.find({
      where: { creditId },
      order: { paymentDate: 'ASC' },
    });
  }

  async update(id: string, dto: UpdateFeeDto) {
    const fee = await this.findByIdWithRelations(id, ['credit']);
    return this.creditFeeRepository.manager.transaction(async (manager) => {
      const dataToSaved: any[] = [];
      dataToSaved.push(manager.save(CreditFee, { id, ...dto }));
      if (dto.amountPaid) {
        const fees = await this.findByCredit(fee.creditId, false);
        const status =
          fees.pop().id == id && dto.status == FeeStatus.Paid
            ? CREDIT_STATUS.COMPLETED
            : undefined;
        if (status)
          dataToSaved.push(
            manager.save(CreditStatus, {
              status: status,
              creditId: fee.creditId,
            }),
          );
        dataToSaved.push(
          manager.save(Credit, {
            id: fee.creditId,
            balance: Number(fee.credit.balance) + dto.amountPaid,
            status,
          }),
        );
      }
      const [savedFee] = await Promise.all(dataToSaved);
      return savedFee;
    });
  }
}
