import { IsUrl, IsUUID } from 'class-validator';

export class CreateProductPhotoDto {
  @IsUrl()
  photoUrl: string;
  @IsUUID()
  productId: string;
}
