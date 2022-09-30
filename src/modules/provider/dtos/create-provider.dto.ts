import { IsInt, IsNotEmpty, MinLength } from 'class-validator';

export class CreateProviderDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsInt()
  percentageCommission: number;
}
