import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Offer } from './offter.entity';
import { CreateOfferDto } from './dtos/create-offer.dto';
import { OfferRepository } from './offer.repository';

@Injectable()
export class OfferService extends CrudService<Offer, CreateOfferDto> {
  constructor(private offerRepository: OfferRepository) {
    super(offerRepository);
  }
}
