import { CrudService } from '../../utils/crud.service';
import { Warranty } from './warranty.entity';
import { WarrantyRepository } from './warranty.repository';
import { CreditService } from '../credit/credit.service';
import { CreateWarrantyDto } from './dtos/create-warranty.dto';
import { CategoryService } from '../category/category.service';
import { UpdateWarrantyDto } from './dtos/update-warranty.dto';
export declare class WarrantyService extends CrudService<Warranty, CreateWarrantyDto> {
    private warrantyRepository;
    private creditService;
    private categoryService;
    constructor(warrantyRepository: WarrantyRepository, creditService: CreditService, categoryService: CategoryService);
    create(dto: CreateWarrantyDto): Promise<Warranty>;
    update(id: string, dto: UpdateWarrantyDto): Promise<Warranty>;
    findByCredit(creditId: string): Promise<Warranty[]>;
}
