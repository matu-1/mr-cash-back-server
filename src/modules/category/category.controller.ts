import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { Response } from '../../utils/response';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@ApiTags('Category')
@Controller('category')
export class CategoryController extends CrudController<Category> {
  constructor(private categoryService: CategoryService) {
    super(categoryService);
  }

  @Post()
  async create(@Body() dto: CreateCategoryDto) {
    const result = await this.categoryService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateCategoryDto,
  ) {
    const result = await this.categoryService.update(id, dto);
    return new Response(result);
  }
}
