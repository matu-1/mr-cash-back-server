import { IsNumber, IsUUID, Min } from 'class-validator';

export class UpdateCreditDto {
  @IsNumber()
  @Min(0)
  deliveryAmount: number;
  @IsUUID()
  deliveryId: string;
}
