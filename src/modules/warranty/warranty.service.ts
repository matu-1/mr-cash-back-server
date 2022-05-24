import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Warranty } from './warranty.entity';
import { WarrantyRepository } from './warranty.repository';
import { CreditService } from '../credit/credit.service';

@Injectable()
export class WarrantyService extends CrudService<Warranty, any> {
  constructor(
    private warrantyRepository: WarrantyRepository,
    private creditService: CreditService,
  ) {
    super(warrantyRepository);
  }

  async findByCredit(creditId: string) {
    await this.creditService.findById(creditId, 'The Credit does not exist');
    return this.warrantyRepository.find({
      where: {
        creditId,
      },
      relations: ['photos'],
    });
  }
}
