import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { Config } from './config.entity';
import { CreateConfigDto } from './dtos/create-config.dto';
import { ConfigRepository } from './config.repository';

@Injectable()
export class ConfigService extends CrudService<Config, CreateConfigDto> {
  constructor(private configRepository: ConfigRepository) {
    super(configRepository);
  }
}
