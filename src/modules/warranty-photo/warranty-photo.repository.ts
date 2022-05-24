import { EntityRepository, Repository } from 'typeorm';
import { WarrantyPhoto } from './warranty-photo.entity';

@EntityRepository(WarrantyPhoto)
export class WarrantyPhotoRepository extends Repository<WarrantyPhoto> {}
