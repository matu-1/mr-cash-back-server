import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsNotEmpty()
  type: string;
  @ApiPropertyOptional()
  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}
