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
  @IsIn([0, 1])
  type: number; //[?, ?]
  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ required: false })
  description: string;
}
