import { Response } from 'src/utils/response';
import { CityService } from './city.service';
import { CrudController } from '../../utils/crud.controller';
import { City } from './city.entity';
import { CreateCityDto } from './dtos/create-city.dto';
import { UpdateCityDto } from './dtos/update-city.dto';
export declare class CityController extends CrudController<City> {
    private cityService;
    constructor(cityService: CityService);
    create(body: CreateCityDto): Promise<Response>;
    update(id: string, body: UpdateCityDto): Promise<Response>;
}
