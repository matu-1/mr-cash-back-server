import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ readOnly: true })
  status: number;
  @IsNotEmpty()
  referredCode: string;
  @IsOptional()
  @IsUrl()
  profilePhotoUrl?: string;
  @IsOptional()
  @IsUrl()
  identityFrontUrl?: string;
  @IsOptional()
  @IsUrl()
  identityBackUrl?: string;
  @IsOptional()
  @IsNotEmpty()
  tokenNotification?: string;
  @IsNotEmpty()
  @IsUUID()
  cityId: string;
}
