import { OmitType, PartialType } from '@nestjs/swagger';
import { IsOptional, IsUrl } from 'class-validator';
import { CreateFeeDto } from './create-fee.dto';

export class UpdateFeeDto extends PartialType(
  OmitType(CreateFeeDto, ['creditId']),
) {
  @IsOptional()
  @IsUrl()
  photoUrl: string;
}
