import { EntityRepository, Repository } from 'typeorm';
import { Warranty } from './warranty.entity';

@EntityRepository(Warranty)
export class WarrantyRepository extends Repository<Warranty> {}
