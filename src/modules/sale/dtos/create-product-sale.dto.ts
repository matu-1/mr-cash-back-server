import { IsInt, IsNumber, IsUUID, Min } from 'class-validator';

export class CreateProductSaleDto {
  @IsNumber()
  @Min(0)
  price: number;
  @IsInt()
  quantity: number;
  @IsUUID()
  productId: string;
}
