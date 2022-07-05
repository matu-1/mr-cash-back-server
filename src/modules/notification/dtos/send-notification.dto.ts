import { IsNotEmpty, IsObject, IsOptional } from 'class-validator';

export class SendNotification {
  @IsNotEmpty()
  to: string;
  @IsNotEmpty()
  body: string;
  @IsNotEmpty()
  title: string;
  @IsOptional()
  @IsObject()
  data?: Record<string, any>;
}
