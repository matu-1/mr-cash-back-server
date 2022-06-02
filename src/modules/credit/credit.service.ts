import { Injectable, BadRequestException } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Credit } from './credit.entity';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { CreditRepository } from './credit.repository';
import { CustomerService } from '../customer/customer.service';
import { BankAccountService } from '../bank-account/bank-account.service';
import { CONFIG } from '../../constants/config';
import { WarrantyPhoto } from '../warranty-photo/warranty-photo.entity';
import { Warranty } from '../warranty/warranty.entity';
import { MessageException } from '../../constants/message-exception';
import { CreditStatus } from '../credit-status/credit-status.entity';
import { CREDIT_STATUS } from './credit.constant';
import { UpdateCreditStatusDto } from './dtos/update-credit-status.dto';

@Injectable()
export class CreditService extends CrudService<Credit, CreateCreditDto> {
  constructor(
    private creditRepository: CreditRepository,
    private customerService: CustomerService,
    private bankAccountService: BankAccountService,
  ) {
    super(creditRepository);
  }

  async findById(id: string, errorMessage = MessageException.NOT_FOUND) {
    return this.findByIdWithRelations(
      id,
      ['customer', 'bankAccount', 'warranties', 'warranties.photos'],
      errorMessage,
    );
  }

  async create(dto: CreateCreditDto) {
    await this.customerService.findById(
      dto.customerId,
      'The customer does not exist',
    );
    await this.bankAccountService.findById(
      dto.bankAccountId,
      'The bank Account does not exist',
    );
    if (dto.originalAmount >= 300 && dto.originalAmount <= 999) {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MAX;
      dto.percentageInterest = CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.PERCENTAGE;
      dto.quantityFee = CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.QUANTITY;
    } else {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MIN;
      dto.percentageInterest =
        CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.PERCENTAGE;
      dto.quantityFee = CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.QUANTITY;
      dto.deliveryAmount = 0;
    }
    const serviceFee = (dto.originalAmount * dto.percentageServiceFee) / 100;
    const interest = (dto.originalAmount * dto.percentageInterest) / 100;
    dto.totalAmount = dto.originalAmount + serviceFee + interest;
    try {
      return await this.creditRepository.manager.transaction(
        async (manager) => {
          const credit = await manager.save(Credit, dto);
          await manager.save(CreditStatus, {
            status: CREDIT_STATUS.PENDING,
            creditId: credit.id,
          });
          for (let i = 0; i < dto.warranties.length; i++) {
            const item = dto.warranties[i];
            const warranty = await manager.save(Warranty, {
              ...item,
              creditId: credit.id,
            });
            await manager.save(
              WarrantyPhoto,
              item.photosUrl.map((photoUrl) => ({
                photoUrl,
                warrantyId: warranty.id,
              })),
            );
          }
          return credit;
        },
      );
    } catch (error) {
      //console.log(error);
      throw new BadRequestException(MessageException.GENERAL);
    }
  }

  async changeStatus(id: string, dto: UpdateCreditStatusDto) {
    const data = await this.findById(id);
    const message = `Can't change state to ${dto.status}`;
    if (
      data.status == CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.EXPIRED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.OFFERED &&
      dto.status != CREDIT_STATUS.REJECTED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.PREAPPROVED &&
      dto.status != CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    return this.creditRepository.save({ id, ...dto });
  }
}
