import { IsIn, IsNotEmpty, IsUUID, MinLength } from 'class-validator';
export class CreateNotificationDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsNotEmpty()
  @MinLength(3)
  body: string;
  @IsIn([0, 1])
  read: number;
  @IsUUID()
  customerId: string;
}
