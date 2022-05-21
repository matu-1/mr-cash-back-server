import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';
import { CONFIG } from '../../../constants/config';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsIn([CONFIG.ROLE.ADMIN, CONFIG.ROLE.OPERATOR])
  role: string;
}
