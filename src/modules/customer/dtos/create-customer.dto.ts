import { IsNotEmpty, IsNumberString, IsUUID, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsNumberString()
  phone: string;
  @IsNotEmpty()
  otp: string;
  status: string;
  @IsNotEmpty()
  referredCode: string;
  @IsNotEmpty()
  profilePhotoUrl: string;
  @IsNotEmpty()
  identityFrontUrl: string;
  @IsNotEmpty()
  identityBackUrl: string;
  @IsNotEmpty()
  @IsUUID()
  cityId: string;
}
