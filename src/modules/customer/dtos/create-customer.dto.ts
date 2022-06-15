import { IsDateString, IsEmail } from 'class-validator';
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
  @IsNotEmpty()
  @IsUrl()
  profilePhotoUrl: string;
  @IsNotEmpty()
  @IsUrl()
  identityFrontUrl: string;
  @IsNotEmpty()
  @IsUrl()
  identityBackUrl: string;
  @IsNotEmpty()
  @IsUUID()
  cityId: string;
}
