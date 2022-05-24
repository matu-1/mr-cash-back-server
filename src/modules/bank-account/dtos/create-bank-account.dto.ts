import { IsNotEmpty, IsNumberString, IsUUID, MinLength } from 'class-validator';

export class CreateBankAccountDto {
  @IsNotEmpty()
  holder: string;
  @IsNotEmpty()
  @MinLength(3)
  accountNumber: string;
  @IsNotEmpty()
  bankName: string;
  @IsNotEmpty()
  identityCard: string;
  @IsNumberString()
  @MinLength(8)
  phoneNumber: string;
  @IsUUID()
  customerId: string;
}
