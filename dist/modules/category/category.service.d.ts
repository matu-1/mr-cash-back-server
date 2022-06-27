import { CrudService } from '../../utils/crud.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { CategoryRepository } from './category.repository';
export declare class CategoryService extends CrudService<Category, CreateCategoryDto> {
    private categoryRepository;
    constructor(categoryRepository: CategoryRepository);
}
