import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateCategoryOfferDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsOptional()
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty({ required: false })
  description?: string;
}
