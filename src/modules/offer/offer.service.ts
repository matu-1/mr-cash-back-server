import { Injectable, BadRequestException } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Offer } from './offter.entity';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { OfferRepository } from './offer.repository';
import { OFFER_STATUS } from './offer.constant';
import { CustomerService } from '../customer/customer.service';
import { BankAccountService } from '../bank-account/bank-account.service';
import { OfferStatus } from '../offer-status/offer-status.entity';
import { MessageException } from '../../constants/message-exception';
import { Product } from '../product/product.entity';
import { ProductPhoto } from '../product-photo/product-photo.entity';
import { sendWhatsapp } from 'src/utils/whatsapp';
import { OfferOfferDto } from './dtos/offer-offer.dto';
import { UpdateOfferStatusDto } from './dtos/update-offer-status.dto';
import { DateUtils } from 'src/utils/date';
import { PRODUCT_STATUS } from '../product/product.constant';

@Injectable()
export class OfferService extends CrudService<Offer, CreateOfferDto> {
  constructor(
    private offerRepository: OfferRepository,
    private customerService: CustomerService,
    private bankAccountService: BankAccountService,
  ) {
    super(offerRepository);
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
        'products',
        'products.photos',
        'products.categoryOffer',
        'products.provider',
      ],
      errorMessage,
    );
  }

  async create(
    dto: CreateOfferDto,
    userId?: string,
    offerStatus: number = OFFER_STATUS.PENDING,
  ) {
    const [customer] = await Promise.all([
      this.customerService.findById(
        dto.customerId,
        'The customer does not exist',
      ),
      this.bankAccountService.findById(
        dto.bankAccountId,
        'The bank Account does not exist',
      ),
    ]);
    try {
      return await this.offerRepository.manager.transaction(async (manager) => {
        dto.status = offerStatus;
        if (dto.id) {
          await Promise.all([
            manager.save(Offer, {
              id: dto.id,
              status: OFFER_STATUS.LOST,
            }),
            manager.save(OfferStatus, {
              status: OFFER_STATUS.LOST,
              userId,
              offerId: dto.id,
            }),
          ]);
          delete dto.id;
        }
        const offer = await manager.save(Offer, dto);
        await manager.save(OfferStatus, {
          status: offerStatus,
          userId,
          offerId: offer.id,
        });
        for (let i = 0; i < dto.products.length; i++) {
          const item = dto.products[i];
          const product = await manager.save(Product, {
            ...item,
            offerId: offer.id,
          });
          await manager.save(
            ProductPhoto,
            item.photosUrl.map((photoUrl) => ({
              photoUrl,
              warrantyId: product.id,
            })),
          );
        }
        // const emailDto = new EmailDto();
        // emailDto.creditId = offer.id.toString();
        // emailDto.email = customer.email;
        // emailDto.name = customer.name;
        // emailDto.status = CREDIT_STATUS.PENDING;
        // await this.emailService.sendEmail(emailDto);
        await sendWhatsapp(
          '19174028986',
          `Nuevo producto Ofertado *MR CASH BACK*\nID ${
            offer.id.split('-')[0]
          }\nCliente: ${customer.name}\nMonto: ${offer.totalAmount}`,
        );
        return offer;
      });
    } catch (error) {
      console.log(error);
      throw new BadRequestException(MessageException.GENERAL);
    }
  }

  async offer({ id, ...dto }: OfferOfferDto, userId: string) {
    const offer = await this.findById(id, 'The offer does not exist');
    if (
      offer.status == OFFER_STATUS.LOST ||
      offer.status == OFFER_STATUS.REJECTED ||
      offer.status == OFFER_STATUS.EXPIRED ||
      offer.status == OFFER_STATUS.CANCELLED
    )
      throw new BadRequestException('The offer cannot be offered');
    delete offer.customer;
    delete offer.bankAccount;
    delete offer.createdAt;
    delete offer.updatedAt;
    const body: CreateOfferDto = {
      ...offer,
      ...dto,
      products: dto.products.map((productDto) => {
        const productRes = offer.products.find(
          (item) => item.id == productDto.id,
        );
        if (!productRes)
          throw new BadRequestException(
            `The productId: ${productDto.id} does not exist`,
          );
        const { photos, ...product } = productRes;
        delete product.id;
        delete product.offerId;
        delete product.createdAt;
        delete product.updatedAt;
        return {
          ...product,
          value: productDto.value,
          photosUrl: photos.map((photo) => photo.photoUrl),
        };
      }),
    };
    body.offerPreviousId = id;
    return await this.create(body, userId, OFFER_STATUS.OFFERED);
  }

  async changeStatus(id: string, dto: UpdateOfferStatusDto, userId: string) {
    const data = await this.findById(id);
    const message = `Can't change state ${data.status} to ${dto.status}`;
    if (
      data.status == OFFER_STATUS.PENDING &&
      dto.status != OFFER_STATUS.CANCELLED &&
      dto.status != OFFER_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.PREAPPROVED &&
      dto.status != OFFER_STATUS.WAITING &&
      dto.status != OFFER_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.WAITING &&
      dto.status != OFFER_STATUS.APPROVED &&
      dto.status != OFFER_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.APPROVED &&
      dto.status != OFFER_STATUS.DISBURSED &&
      dto.status != OFFER_STATUS.CANCELLED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.DISBURSED &&
      dto.status != OFFER_STATUS.EXPIRED &&
      dto.status != OFFER_STATUS.CANCELLED &&
      data.status == OFFER_STATUS.COMPLETED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.OFFERED &&
      dto.status != OFFER_STATUS.REJECTED &&
      dto.status != OFFER_STATUS.CANCELLED &&
      dto.status != OFFER_STATUS.PREAPPROVED
    )
      throw new BadRequestException(message);
    if (
      data.status == OFFER_STATUS.CANCELLED ||
      data.status == OFFER_STATUS.REJECTED ||
      data.status == OFFER_STATUS.EXPIRED ||
      data.status == OFFER_STATUS.COMPLETED
    )
      throw new BadRequestException(message);

    // if (dto.status == OFFER_STATUS.APPROVED && !dto.approvedPhotoUrl)
    //   throw new BadRequestException(`approvedPhotoUrl is required`);
    // if (dto.status == OFFER_STATUS.DISBURSED && !dto.disbursementPhotoUrl)
    //   throw new BadRequestException(`disbursementPhotoUrl is required`);

    return this.offerRepository.manager.transaction(async (manager) => {
      if (dto.status === OFFER_STATUS.PREAPPROVED) {
        //TODO: contrato
      }
      if (dto.status === OFFER_STATUS.APPROVED)
        dto.disburseAt = DateUtils.addDays(new Date(), 2);

      const dataToSave: any[] = [
        manager.save(OfferStatus, {
          status: dto.status,
          reason: dto.reason,
          userId,
          offerId: id,
        }),
        manager.save(Offer, { id, ...dto }),
      ];
      if (
        dto.status == OFFER_STATUS.CANCELLED ||
        dto.status == OFFER_STATUS.REJECTED
      )
        dataToSave.push(
          manager.update(
            Product,
            { offerId: data.id },
            { status: PRODUCT_STATUS.LOST },
          ),
        );
      const res = await Promise.all(dataToSave);
      return res[1];
    });
  }

  async findByCustomer(customerId: string, limit?: number) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    let query = this.offerRepository
      .createQueryBuilder('offer')
      .where('offer.customerId = :customerId', { customerId })
      .orderBy('offer.createdAt', 'DESC');
    if (limit) query = query.take(limit);
    return query.getMany();
  }
}
