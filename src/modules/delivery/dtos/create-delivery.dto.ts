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
  @IsNotEmpty()
  @MinLength(6)
  reference: string;
  @IsNumber()
  amount: number;
  @IsUUID()
  creditId: string;
}
