import { IsNotEmpty, IsNumberString, IsUUID } from 'class-validator';

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
  @IsUUID()
  customerId: string;
}
