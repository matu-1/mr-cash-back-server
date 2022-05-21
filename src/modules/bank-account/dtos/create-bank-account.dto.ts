import { IsNotEmpty, IsInt, IsNumberString } from 'class-validator';

export class CreateBankAccountDto {
  @IsNotEmpty()
  holder: string;
  @IsNotEmpty()
  accountNumber: string;
  @IsNotEmpty()
  bankName: string;
  @IsNotEmpty()
  identityCard: string;
  @IsNumberString()
  phoneNumber: string;
  @IsInt()
  customerId: string;
}
