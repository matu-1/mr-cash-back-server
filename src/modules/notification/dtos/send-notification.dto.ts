import { IsNotEmpty, IsObject, IsOptional, IsUUID } from 'class-validator';

export class SendNotification {
  @IsNotEmpty()
  to: string;
  @IsNotEmpty()
  body: string;
  @IsNotEmpty()
  title: string;
  @IsUUID()
  customerId: string;
  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}
