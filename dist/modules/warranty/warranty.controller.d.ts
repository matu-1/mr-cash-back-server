import { CrudController } from '../../utils/crud.controller';
import { Warranty } from './warranty.entity';
import { WarrantyService } from './warranty.service';
import { Response } from '../../utils/response';
import { CreateWarrantyDto } from './dtos/create-warranty.dto';
import { UpdateWarrantyDto } from './dtos/update-warranty.dto';
export declare class WarrantyController extends CrudController<Warranty> {
    private warrantyService;
    constructor(warrantyService: WarrantyService);
    create(dto: CreateWarrantyDto): Promise<Response>;
    update(id: string, dto: UpdateWarrantyDto): Promise<Response>;
    findByCredit(id: string): Promise<Response>;
}
