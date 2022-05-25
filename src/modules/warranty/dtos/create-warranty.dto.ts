import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateWarrantyDto {
  @IsNotEmpty()
  @MinLength(2)
  brand: string;
  @IsNotEmpty()
  @MinLength(2)
  model: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  value: number;
  @IsUUID()
  categoryId: string;
  @IsUUID()
  creditId: string;
}
