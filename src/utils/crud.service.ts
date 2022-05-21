import { BaseEntity } from './base.entity';
import { Repository, DeepPartial } from 'typeorm';
import { MessageException } from '../constants/message-exception';
import { NotFoundException } from '@nestjs/common';

export abstract class CrudService<
  TEntity extends BaseEntity,
  TCreateDto extends DeepPartial<TEntity>,
> {
  constructor(private repository: Repository<TEntity>) {}

  async findAll() {
    return await this.repository.find({
      order: { createdAt: 'DESC' },
    } as any);
  }

  async findById(id: string, errorMessage = MessageException.NOT_FOUND) {
    const data = await this.repository.findOne(id);
    if (!data) throw new NotFoundException(errorMessage);
    return data;
  }

  async create(dto: TCreateDto): Promise<TEntity> {
    return await this.repository.save(dto);
  }

  async update(id: string, dto: DeepPartial<TEntity>): Promise<TEntity> {
    const data = await this.findById(id);
    return this.repository.save(this.repository.merge(data, dto) as any);
  }

  async remove(id: string) {
    const data = await this.findById(id);
    return this.repository.softRemove(data as any);
  }
}
