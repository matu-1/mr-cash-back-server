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
import { OfferCreditDto } from './dtos/offer-credit.dto';

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

  async findByCustomer(customerId: string) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    return this.creditRepository.find({
      where: { customerId },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async create(
    dto: CreateCreditDto,
    creditStatus: number = CREDIT_STATUS.PENDING,
  ) {
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
          dto.status = creditStatus;
          if ((dto as any).id) {
            await manager.save(Credit, {
              id: (dto as any).id,
              status: CREDIT_STATUS.LOST,
            });
            await manager.save(CreditStatus, {
              status: CREDIT_STATUS.LOST,
              creditId: (dto as any).id,
            });
            delete (dto as any).id;
          }
          const credit = await manager.save(Credit, dto);
          await manager.save(CreditStatus, {
            status: creditStatus,
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

  async offer({ id, ...dto }: OfferCreditDto) {
    const credit = await this.findById(id, 'The credit does not exist');
    if (
      credit.status == CREDIT_STATUS.LOST ||
      credit.status == CREDIT_STATUS.REJECTED ||
      credit.status == CREDIT_STATUS.EXPIRED ||
      credit.status == CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException('The credit cannot be offered');
    delete credit.customer;
    delete credit.bankAccount;
    delete credit.createdAt;
    delete credit.updatedAt;
    const body: CreateCreditDto = {
      ...credit,
      ...dto,
      warranties: dto.warranties.map((warrantyDto) => {
        const warrantyRes = credit.warranties.find(
          (item) => item.id == warrantyDto.id,
        );
        if (!warrantyRes)
          throw new BadRequestException(
            `The warrantyId: ${warrantyDto.id} does not exist`,
          );
        const { photos, ...warranty } = warrantyRes;
        delete warranty.id;
        delete warranty.creditId;
        delete warranty.createdAt;
        delete warranty.updatedAt;
        return {
          ...warranty,
          value: warrantyDto.value,
          photosUrl: photos.map((photo) => photo.photoUrl),
        };
      }),
    };
    body.creditPreviousId = id;
    const data = await this.create(body, CREDIT_STATUS.OFFERED);
    return data;
  }

  async changeStatus(id: string, dto: UpdateCreditStatusDto) {
    const data = await this.findById(id);
    const message = `Can't change state ${data.status} to ${dto.status}`;
    if (
      data.status == CREDIT_STATUS.PENDING &&
      dto.status != CREDIT_STATUS.CANCELLED
      // && dto.status != CREDIT_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.PREAPPROVED &&
      dto.status != CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.EXPIRED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.OFFERED &&
      dto.status != CREDIT_STATUS.REJECTED &&
      dto.status != CREDIT_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.CANCELLED ||
      data.status == CREDIT_STATUS.REJECTED ||
      data.status == CREDIT_STATUS.EXPIRED
    )
      throw new BadRequestException(message);
    return this.creditRepository.manager.transaction(async (manager) => {
      const res = await Promise.all([
        manager.save(CreditStatus, {
          status: dto.status,
          creditId: id,
        }),
        manager.save(Credit, { id, ...dto }),
      ]);
      return res[1];
    });
  }
}