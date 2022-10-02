import { EntityRepository, Repository } from 'typeorm';
import { Sale } from './sale.entity';

@EntityRepository(Sale)
export class SaleRepository extends Repository<Sale> {}
