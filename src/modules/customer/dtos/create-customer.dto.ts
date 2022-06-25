import { IsDateString, IsEmail, IsOptional } from 'class-validator';
import {
  IsNotEmpty,
  IsNumberString,
  IsUrl,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsNumberString()
  @MinLength(8)
  phone: string;
  @IsEmail()
  email: string;
  @IsDateString()
  birthday: string;
  status: string;
  @IsNotEmpty()
  referredCode: string;
  @IsOptional()
  profilePhotoUrl: string;
  @IsOptional()
  identityFrontUrl: string;
  @IsOptional()
  identityBackUrl: string;
  @IsOptional()
  tokenNotification: string;
  @IsNotEmpty()
  @IsUUID()
  cityId: string;
}
