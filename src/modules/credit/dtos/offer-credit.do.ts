import { CreateCreditDto } from './create-credit.dto';
import { IsUUID } from 'class-validator';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class OfferCreditDto extends OmitType(CreateCreditDto, [
  'customerId',
  'bankAccountId',
  'plan',
]) {
  @ApiProperty()
  @IsUUID()
  id: string;
}
