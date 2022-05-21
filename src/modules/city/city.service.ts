import { Injectable } from '@nestjs/common';
import { CrudService } from 'src/utils/crud.service';
import { City } from './city.entity';
import { CreateCityDto } from './dtos/create-city.dto';
import { CityRepository } from './city.repository';

@Injectable()
export class CityService extends CrudService<City, CreateCityDto> {
  constructor(private cityRepository: CityRepository) {
    super(cityRepository);
  }
}
