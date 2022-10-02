import { ApiHideProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsIn,
  IsNumber,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { OFFER_PAYMENT_METHOD } from '../sale.constant';
import { CreateProductSaleDto } from './create-product-sale.dto';

export class CreateSaleDto {
  @IsNumber()
  @Min(0)
  totalAmount: number;
  @ApiHideProperty()
  deliveryAmount?: number;
  @IsIn(Object.values(OFFER_PAYMENT_METHOD))
  paymentMethod: number;
  @IsUUID()
  customerId: string;
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => CreateProductSaleDto)
  productsSale: CreateProductSaleDto[];
}
