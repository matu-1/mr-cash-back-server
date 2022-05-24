import { EntityRepository, Repository } from 'typeorm';
import { CreditFee } from './credit-fee.entity';

@EntityRepository(CreditFee)
export class CreditFeeRepository extends Repository<CreditFee> {}
