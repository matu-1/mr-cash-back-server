import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateDeliveryDto {
  @IsNumber()
  latitude: number;
  @IsNumber()
  longitude: number;
  @IsNotEmpty()
  @MinLength(6)
  address: string;
  @IsOptional()
  reference: string;
  @IsNumber()
  amount: number;
  @IsOptional()
  @IsUUID()
  creditId: string;
  @IsOptional()
  @IsUUID()
  offerId: string;
  @IsOptional()
  @IsUUID()
  saleId: string;
}
