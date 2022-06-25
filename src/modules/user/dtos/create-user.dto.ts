import { IsEmail, IsIn, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '../../../constants/roles';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  password: string;
  @IsIn(Object.values(Role))
  role: string;
}
