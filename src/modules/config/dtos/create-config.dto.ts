import { IsIn } from 'class-validator';

export class CreateConfigDto {
  @IsIn([0, 1])
  showOffer: number;
}
