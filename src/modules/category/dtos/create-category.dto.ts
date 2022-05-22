import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  type: string;
  @IsOptional()
  @IsNotEmpty()
  @MinLength(10)
  description: string;
}
