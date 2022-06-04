import { CreateCreditDto } from './create-credit.dto';
import { ArrayMinSize, IsArray, IsUUID, ValidateNested } from 'class-validator';
import { OmitType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { OfferWarranty } from './offer-warranty.dto';

export class OfferCreditDto extends OmitType(CreateCreditDto, [
  'customerId',
  'bankAccountId',
  'plan',
  'warranties',
]) {
  @IsUUID()
  id: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => OfferWarranty)
  warranties: OfferWarranty[];
}
