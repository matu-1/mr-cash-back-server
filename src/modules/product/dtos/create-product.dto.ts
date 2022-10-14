import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUrl,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';
import { PRODUCT_STATUS } from '../product.constant';

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
  @ApiProperty({ required: false })
  @IsOptional()
  @IsIn(Object.values(PRODUCT_STATUS))
  status: number;
}
