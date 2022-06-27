import { CrudService } from 'src/utils/crud.service';
import { City } from './city.entity';
import { CreateCityDto } from './dtos/create-city.dto';
import { CityRepository } from './city.repository';
export declare class CityService extends CrudService<City, CreateCityDto> {
    private cityRepository;
    constructor(cityRepository: CityRepository);
}
