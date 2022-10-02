import { IsNumber, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class OfferProduct {
  @IsUUID()
  id: string;
  @IsNumber()
  @Type(() => Number)
  value: number;
}
