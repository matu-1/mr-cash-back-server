import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Warranty } from './warranty.entity';
import { WarrantyRepository } from './warranty.repository';
import { CreditService } from '../credit/credit.service';
import { CreateWarrantyDto } from './dtos/create-warranty.dto';
import { CategoryService } from '../category/category.service';
import { UpdateWarrantyDto } from './dtos/update-warranty.dto';

@Injectable()
export class WarrantyService extends CrudService<Warranty, CreateWarrantyDto> {
  constructor(
    private warrantyRepository: WarrantyRepository,
    private creditService: CreditService,
    private categoryService: CategoryService,
  ) {
    super(warrantyRepository);
  }

  async create(dto: CreateWarrantyDto) {
    await this.creditService.findById(
      dto.creditId,
      'The credit does not exist',
    );
    await this.categoryService.findById(
      dto.creditId,
      'The category does not exist',
    );
    return super.create(dto);
  }

  async update(id: string, dto: UpdateWarrantyDto) {
    await this.findById(id, 'The warranty does not exist');
    if (dto.creditId)
      await this.creditService.findById(
        dto.creditId,
        'The credit does not exist',
      );
    if (dto.categoryId)
      await this.categoryService.findById(
        dto.creditId,
        'The category does not exist',
      );
    return super.update(id, dto);
  }

  async findByCredit(creditId: string) {
    await this.creditService.findById(creditId, 'The Credit does not exist');
    return this.warrantyRepository.find({
      where: {
        creditId,
      },
      relations: ['photos'],
    });
  }
}
