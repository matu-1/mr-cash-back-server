import { PartialType } from '@nestjs/swagger';
import { CreateCategoryOfferDto } from './create-category-offer.dto';

export class UpdateCategoryOfferDto extends PartialType(
  CreateCategoryOfferDto,
) {}
