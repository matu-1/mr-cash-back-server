import { IsNotEmpty, IsUUID, MinLength } from 'class-validator';

export class CreateBankAccountDto {
  @IsNotEmpty()
  holder: string;
  @IsNotEmpty()
  @MinLength(3)
  accountNumber: string;
  @IsNotEmpty()
  bankName: string;
  @IsNotEmpty()
  identityNumber: string;
  @IsNotEmpty()
  accountType: string;
  @IsNotEmpty()
  extension: string;
  @IsNotEmpty()
  address: string;
  @IsUUID()
  customerId: string;
}
