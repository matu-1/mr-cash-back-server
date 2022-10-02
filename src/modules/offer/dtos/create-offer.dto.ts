import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { ProductDto } from './product.dto';

export class CreateOfferDto {
  @IsNumber()
  @Min(0)
  totalAmount: number;
  @ApiHideProperty()
  deliveryAmount: number;
  @ApiHideProperty()
  status: number;
  @IsUUID()
  customerId: string;
  @IsUUID()
  bankAccountId: string;
  @ApiHideProperty()
  offerPreviousId: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
