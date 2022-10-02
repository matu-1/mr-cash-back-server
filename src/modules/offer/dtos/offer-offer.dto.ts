import { ArrayMinSize, IsArray, IsUUID, ValidateNested } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { CreateOfferDto } from './create-offer.dto';
import { OfferProduct } from './offer-product.dto';

export class OfferOfferDto extends OmitType(CreateOfferDto, [
  'customerId',
  'bankAccountId',
  'products',
]) {
  @IsUUID()
  id: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OfferProduct)
  products: OfferProduct[];
}
