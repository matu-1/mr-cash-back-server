import { IsNumber, IsUUID } from 'class-validator';

export class OfferWarranty {
  @IsUUID()
  id: string;
  @IsNumber()
  value: number;
}
