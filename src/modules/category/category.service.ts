import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService extends CrudService<Category, CreateCategoryDto> {
  constructor(private categoryRepository: CategoryRepository) {
    super(categoryRepository);
  }
}
