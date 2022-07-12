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
import { CREDIT_STATUS, PLAN } from './credit.constant';
import { UpdateCreditStatusDto } from './dtos/update-credit-status.dto';
import { OfferCreditDto } from './dtos/offer-credit.dto';
import { CreditFee } from '../credit-fee/credit-fee.entity';
import { EntityManager } from 'typeorm';
import { CreateCreditFee } from '../credit-fee/interfaces/credit-fee.interface';
import { CreateContractDto } from './utils/create-pdf';
import { uploadConctract } from './utils/create-pdf';
import { DateUtils } from '../../utils/date';

@Injectable()
export class CreditService extends CrudService<Credit, CreateCreditDto> {
  constructor(
    private creditRepository: CreditRepository,
    private customerService: CustomerService,
    private bankAccountService: BankAccountService,
  ) {
    super(creditRepository);
  }

  async findAllByRange(start: Date, end: Date) {
    return super.findAllByRange(
      start,
      end,
      ['customer'],
      ['g', 'customer.id', 'customer.tokenNotification'],
    );
  }

  async findById(id: string, errorMessage = MessageException.NOT_FOUND) {
    return this.findByIdWithRelations(
      id,
      [
        'customer',
        'delivery',
        'bankAccount',
        'warranties',
        'warranties.photos',
      ],
      errorMessage,
    );
  }

  async findByCustomer(customerId: string, limit?: number) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    let query = this.creditRepository
      .createQueryBuilder('credit')
      .where('credit.customerId = :customerId', { customerId })
      .orderBy('credit.createdAt', 'DESC');
    if (limit) query = query.take(limit);
    return query.getMany();
  }

  async create(
    dto: CreateCreditDto,
    userId?: string,
    creditStatus: number = CREDIT_STATUS.PENDING,
  ) {
    await Promise.all([
      this.customerService.findById(
        dto.customerId,
        'The customer does not exist',
      ),
      this.bankAccountService.findById(
        dto.bankAccountId,
        'The bank Account does not exist',
      ),
    ]);
    this.calculateCredit(dto);
    try {
      return await this.creditRepository.manager.transaction(
        async (manager) => {
          dto.status = creditStatus;
          dto.numberId = Date.now();
          if ((dto as any).id) {
            await Promise.all([
              manager.save(Credit, {
                id: (dto as any).id,
                status: CREDIT_STATUS.LOST,
              }),
              manager.save(CreditStatus, {
                status: CREDIT_STATUS.LOST,
                userId,
                creditId: (dto as any).id,
              }),
            ]);
            delete (dto as any).id;
          }
          const credit = await manager.save(Credit, dto);
          await manager.save(CreditStatus, {
            status: creditStatus,
            userId,
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
      console.log(error);
      throw new BadRequestException(MessageException.GENERAL);
    }
  }

  async offer({ id, ...dto }: OfferCreditDto, userId: string) {
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
    const data = await this.create(body, userId, CREDIT_STATUS.OFFERED);
    return data;
  }

  async changeStatus(id: string, dto: UpdateCreditStatusDto, userId: string) {
    const data = await this.findById(id);
    const message = `Can't change state ${data.status} to ${dto.status}`;
    if (
      data.status == CREDIT_STATUS.PENDING &&
      dto.status != CREDIT_STATUS.CANCELLED &&
      dto.status != CREDIT_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.PREAPPROVED &&
      dto.status != CREDIT_STATUS.WAITING &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.WAITING &&
      dto.status != CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.APPROVED &&
      dto.status != CREDIT_STATUS.DISBURSED &&
      dto.status != CREDIT_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.DISBURSED &&
      dto.status != CREDIT_STATUS.EXPIRED &&
      dto.status != CREDIT_STATUS.CANCELLED &&
      data.status == CREDIT_STATUS.COMPLETED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.OFFERED &&
      dto.status != CREDIT_STATUS.REJECTED &&
      dto.status != CREDIT_STATUS.CANCELLED &&
      dto.status != CREDIT_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == CREDIT_STATUS.CANCELLED ||
      data.status == CREDIT_STATUS.REJECTED ||
      data.status == CREDIT_STATUS.EXPIRED ||
      data.status == CREDIT_STATUS.COMPLETED
    )
      throw new BadRequestException(message);

    if (dto.status == CREDIT_STATUS.APPROVED && !dto.approvedPhotoUrl)
      throw new BadRequestException(`approvedPhotoUrl is required`);
    if (dto.status == CREDIT_STATUS.DISBURSED && !dto.disbursementPhotoUrl)
      throw new BadRequestException(`disbursementPhotoUrl is required`);

    return this.creditRepository.manager.transaction(async (manager) => {
      if (dto.status === CREDIT_STATUS.PREAPPROVED) {
        const fees = await this.createFees(data, manager);
        const contractDto: CreateContractDto = {
          nit: '28555652655',
          acreedorNombre: 'Juan Pablo',
          acreedorCI: '12345678',
          acreedorExpedicion: 'SC',
          acreedorDireccion: 'Ramada Av avenida',
          acreedorNroCasa: '1255',
          deudorNombre: data.customer.name,
          deudorCI: data.bankAccount.identityNumber,
          deudorExpedicion: data.bankAccount.extension,
          deudorDireccion: data.bankAccount.address,
          amount: data.originalAmount,
          totalAmount: data.totalAmount,
          quantityFee: data.quantityFee,
          fistFeeDate: fees[0].paymentDate,
          lastFeeDate: fees.pop().paymentDate,
          warrantyDescription: data.warranties
            .map(
              (item) => `${item.brand} - ${item.status} - ${item.description}`,
            )
            .join(', '),
          nroFacturaCompra: '******',
          facturaCompra: '******',
          creationDate: new Date(),
        };
        dto.urlContract = await uploadConctract(contractDto);
      }
      if (dto.status == CREDIT_STATUS.APPROVED) {
        dto.disburseAt = DateUtils.addDays(
          new Date(),
          data.expressDisbursement ? 1 : 2,
        );
      }
      const dataToSave: any[] = [
        manager.save(CreditStatus, {
          status: dto.status,
          userId,
          creditId: id,
        }),
        manager.save(Credit, { id, ...dto }),
      ];
      const res = await Promise.all(dataToSave);
      return res[1];
    });
  }

  createFees(credit: Credit, manager: EntityManager) {
    const creditFees: CreateCreditFee[] = [];
    const amount = credit.totalAmount / credit.quantityFee;
    let today = new Date();
    // const offsetDay = credit.plan == PLAN.WEEKLY ? 7 : 30;
    for (let index = 1; index <= credit.quantityFee; index++) {
      today = new Date(today);
      if (credit.plan == PLAN.WEEKLY) {
        today.setDate(today.getDate() + 7);
      } else {
        today.setMonth(today.getMonth() + 1);
      }
      creditFees.push({
        creditId: credit.id,
        amount,
        paymentDate: today,
      });
    }
    return manager.save(CreditFee, creditFees);
  }

  calculateCredit(dto: CreateCreditDto) {
    if (dto.originalAmount >= 300 && dto.originalAmount <= 999) {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MAX;
      dto.percentageInterest =
        CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.PERCENTAGE;
      dto.quantityFee =
        dto.plan == PLAN.WEEKLY
          ? CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.QUANTITY
          : CONFIG.PERCENTAGE_INTEREST.TWO_MONTHS.QUANTITY;
      dto.deliveryAmount = CONFIG.DELIVERY_AMOUNT;
    } else {
      dto.percentageServiceFee = CONFIG.PERCENTAGE_SERVICE_FEE.MIN;
      dto.percentageInterest =
        CONFIG.PERCENTAGE_INTEREST.TWELVE_WEEKS.PERCENTAGE;
      dto.quantityFee =
        dto.plan == PLAN.WEEKLY
          ? CONFIG.PERCENTAGE_INTEREST.TWELVE_WEEKS.QUANTITY
          : CONFIG.PERCENTAGE_INTEREST.THREE_MONTHS.QUANTITY;
      dto.deliveryAmount = 0;
    }
    const serviceFee = (dto.originalAmount * dto.percentageServiceFee) / 100;
    const interest = (dto.originalAmount * dto.percentageInterest) / 100;
    dto.totalAmount =
      dto.originalAmount + serviceFee + interest + dto.deliveryAmount;
    if (dto.expressDisbursement)
      dto.totalAmount = dto.totalAmount + CONFIG.EXPRESS_DISBURSEMENT;
    return dto;
  }

  async getQualityIndicators() {
    const month = new Date().getMonth() + 1;
    const averageAmountPromise = this.creditRepository.manager.query(
      `
        select ROUND(avg(c.total_amount), 2) as averageAmount 
        from credit c where month(c.created_at) = ?
        and c.status = ? or c.status = ?
      `,
      [month, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const activedCustomerPromise = this.creditRepository.manager.query(
      `
        select count(distinct c.id) as activedCustomers
        from customer c 
        inner join credit cd on cd.customer_id = c.id
        where month(c.created_at) = ?
        and cd.status = ? or cd.status = ?
      `,
      [month, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const quantityCreditPromise = this.creditRepository.manager.query(
      `
        select count(*) as quantityCredits
        from credit c where month(c.created_at) = ?
        and c.status = ? or c.status = ?
      `,
      [month, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const registeredCustomerPromise = this.creditRepository.manager.query(
      `
        select count(*) as registeredCustomers
        from customer c 
        where month(c.created_at) = ?
      `,
      [month],
    );
    const originalAmountPromise = this.creditRepository.manager.query(
      `
        select sum(c.original_amount) as originalAmount 
        from credit c where month(c.created_at) = ?
        and c.status = ? or c.status = ?
      `,
      [month, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const [
      averageAmount,
      activedCustomer,
      quantityCredit,
      registeredCustomer,
      originalAmount,
    ] = await Promise.all([
      averageAmountPromise,
      activedCustomerPromise,
      quantityCreditPromise,
      registeredCustomerPromise,
      originalAmountPromise,
    ]);
    return {
      ...averageAmount[0],
      ...activedCustomer[0],
      ...quantityCredit[0],
      ...registeredCustomer[0],
      ...originalAmount[0],
    };
  }

  async getQualityIndicatorsAnnual() {
    const year = new Date().getFullYear();
    const averageAmountPromise = this.creditRepository.manager.query(
      `
        select month(c.created_at) as month, ROUND(avg(c.total_amount), 2) as value 
        from credit c where year(c.created_at) = ?
        and c.status = ? or c.status = ?
        group by month(c.created_at)
      `,
      [year, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const activedCustomerPromise = this.creditRepository.manager.query(
      `
        select month(c.created_at) as month, count(distinct c.id) as value
        from customer c 
        inner join credit cd on cd.customer_id = c.id
        where year(c.created_at) = ?
        and cd.status = ? or cd.status = ?
        group by month(c.created_at)
      `,
      [year, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const quantityCreditPromise = this.creditRepository.manager.query(
      `
        select month(c.created_at) as month, count(*) as value
        from credit c where year(c.created_at) = ?
        and c.status = ? or c.status = ?
        group by month(c.created_at)
      `,
      [year, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const registeredCustomerPromise = this.creditRepository.manager.query(
      `
        select month(c.created_at) as month, count(*) as value
        from customer c 
        where year(c.created_at) = ?
        group by month(c.created_at)
      `,
      [year],
    );
    const originalAmountPromise = this.creditRepository.manager.query(
      `
        select month(c.created_at) as month, sum(c.original_amount) as value 
        from credit c where year(c.created_at) = ?
        and c.status = ? or c.status = ?
        group by month(c.created_at)
      `,
      [year, CREDIT_STATUS.DISBURSED, CREDIT_STATUS.COMPLETED],
    );
    const [
      averageAmount,
      activedCustomer,
      quantityCredit,
      registeredCustomer,
      originalAmount,
    ] = await Promise.all([
      averageAmountPromise,
      activedCustomerPromise,
      quantityCreditPromise,
      registeredCustomerPromise,
      originalAmountPromise,
    ]);
    return {
      averageAmount,
      activedCustomer,
      quantityCredit,
      registeredCustomer,
      originalAmount,
    };
  }

  async getTotalByStatus() {
    const credits = await this.findAll();
    const res = {
      active: 0,
      expired: 0,
      canceled: 0,
      complete: 0,
    };
    credits.forEach((credit) => {
      switch (credit.status) {
        case CREDIT_STATUS.EXPIRED:
          res.expired++;
          break;
        case CREDIT_STATUS.COMPLETED:
          res.complete++;
          break;
        case CREDIT_STATUS.CANCELLED:
        case CREDIT_STATUS.REJECTED:
          res.canceled++;
          break;
        case CREDIT_STATUS.DISBURSED:
          res.active++;
          break;
        default:
          break;
      }
    });
    return res;
  }

  async getLiquidatedWarranties() {
    return await this.creditRepository.find({
      where: {
        status: CREDIT_STATUS.EXPIRED,
      },
      relations: ['customer'],
    });
  }

  async getEarnings(start: Date, end: Date) {
    return await this.creditRepository
      .createQueryBuilder('cr')
      .where('cr.status = :status and cr.createdAt BETWEEN :start and :end', {
        status: CREDIT_STATUS.COMPLETED,
        start,
        end,
      })
      .getMany();
  }
}
