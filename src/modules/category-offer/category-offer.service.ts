import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { CategoryOffer } from './category-offer.entity';
import { CreateCategoryOfferDto } from './dtos/create-category-offer.dto';
import { CategoryOfferRepository } from './category-offer.repository';

@Injectable()
export class CategoryOfferService extends CrudService<
  CategoryOffer,
  CreateCategoryOfferDto
> {
  constructor(private categoryOfferRepository: CategoryOfferRepository) {
    super(categoryOfferRepository);
  }
}
