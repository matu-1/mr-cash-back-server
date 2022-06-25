import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { CreditFee } from './credit-fee.entity';
import { CreditFeeRepository } from './credit-fee.repository';
import { CreditService } from '../credit/credit.service';
import { UpdateFeeDto } from './dtos/update-fee.dto';
import { Credit } from '../credit/credit.entity';

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

  async update(id: string, dto: UpdateFeeDto) {
    const fee = await this.findByIdWithRelations(id, ['credit']);
    return this.creditFeeRepository.manager.transaction(async (manager) => {
      const data = await manager.save(CreditFee, { id, ...dto });
      if (dto.amountPaid)
        await manager.save(Credit, {
          id: fee.creditId,
          balance: Number(fee.credit.balance) + dto.amountPaid,
        });
      return data;
    });
  }
}
