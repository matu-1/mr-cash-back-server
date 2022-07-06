import { CrudController } from '../../utils/crud.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Response } from '../../utils/response';
import { UpdateCategoryDto } from './dtos/update-category.dto';
export declare class CategoryController extends CrudController<Category> {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategoryDto): Promise<Response>;
    update(id: string, dto: UpdateCategoryDto): Promise<Response>;
}
