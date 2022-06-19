import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateFeeDto } from './create-fee.dto';

export class UpdateFeeDto extends PartialType(
  OmitType(CreateFeeDto, ['creditId']),
) {}
