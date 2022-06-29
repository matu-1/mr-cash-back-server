import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class Warranty {
  @IsNotEmpty()
  brand: string;
  @IsNotEmpty()
  status: string;
  @IsOptional()
  @MinLength(10)
  description: string;
  @IsUUID()
  categoryId: string;
  @ApiProperty({ readOnly: true })
  creditId: string;
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  photosUrl: string[];
}
