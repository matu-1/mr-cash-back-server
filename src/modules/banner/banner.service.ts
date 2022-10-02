import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Banner } from './banner.entity';
import { CreateBannerDto } from './dtos/create-banner.dto';
import { BannerRepository } from './banner.repository';

@Injectable()
export class BannerService extends CrudService<Banner, CreateBannerDto> {
  constructor(private bannerRepository: BannerRepository) {
    super(bannerRepository);
  }

  findByType(type: number) {
    return this.bannerRepository.find({ where: { type } });
  }
}
