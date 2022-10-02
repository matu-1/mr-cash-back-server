import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';
import { OFFER_STATUS } from '../offer.constant';

export class UpdateOfferStatusDto {
  @IsIn([
    OFFER_STATUS.CANCELLED,
    OFFER_STATUS.PREAPPROVED,
    OFFER_STATUS.WAITING,
    OFFER_STATUS.APPROVED,
    OFFER_STATUS.DISBURSED,
    OFFER_STATUS.EXPIRED,
    OFFER_STATUS.REJECTED,
  ])
  status: number;
  @ApiProperty({ readOnly: true })
  urlContract: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  urlSignature: string;
  @ApiProperty({ readOnly: true })
  disburseAt: Date;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  approvedPhotoUrl?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsUrl()
  disbursementPhotoUrl?: string;
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  reason?: string;
}
