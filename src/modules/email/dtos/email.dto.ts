import { IsEmail, IsIn, IsUUID, MinLength } from 'class-validator';
import { CREDIT_STATUS } from 'src/modules/credit/credit.constant';
export class EmailDto {
    @IsUUID()
    creditId: string;
    @IsEmail()
    email: string;
    @MinLength(3)
    name: string;
    @IsIn([
        CREDIT_STATUS.CANCELLED,
        CREDIT_STATUS.PREAPPROVED,
        CREDIT_STATUS.WAITING,
        CREDIT_STATUS.APPROVED,
        CREDIT_STATUS.DISBURSED,
        CREDIT_STATUS.EXPIRED,
        CREDIT_STATUS.REJECTED,
    ])
    status: number;
}