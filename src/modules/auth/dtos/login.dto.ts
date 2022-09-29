import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @ApiProperty({ example: 'matu@gmail.com' })
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ example: 'matu123+' })
  password: string;
}
