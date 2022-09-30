import { EntityRepository, Repository } from 'typeorm';
import { CategoryOffer } from './category-offer.entity';

@EntityRepository(CategoryOffer)
export class CategoryOfferRepository extends Repository<CategoryOffer> {}
