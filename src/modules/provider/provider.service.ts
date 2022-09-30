import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Provider } from './provider.entity';
import { CreateProviderDto } from './dtos/create-provider.dto';
import { ProviderRepository } from './provider.repository';

@Injectable()
export class ProviderService extends CrudService<Provider, CreateProviderDto> {
  constructor(private providerRepository: ProviderRepository) {
    super(providerRepository);
  }
}
