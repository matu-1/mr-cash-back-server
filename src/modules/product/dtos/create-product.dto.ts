import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUrl,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  description?: string;
  @IsInt()
  @Min(1)
  quantity: number;
  @IsNumber()
  @Min(0)
  purchasePrice: number;
  @IsNumber()
  @Min(0)
  salePrice: number;
  @IsUUID()
  categoryOfferId: string;
  @IsUUID()
  providerId: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUUID()
  offerId?: string;
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  photosUrl: string[];
}
