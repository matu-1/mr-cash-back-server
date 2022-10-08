import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateBannerDto {
  @IsNotEmpty()
  @IsUrl()
  photoUrl: string;
  @ApiProperty({ description: 'home, oferta' })
  @IsIn([0, 1])
  type: number; //[home, oferta]
  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ required: false })
  description?: string;
}
