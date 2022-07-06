import { BaseEntity } from './base.entity';
import { Repository, DeepPartial } from 'typeorm';
export declare abstract class CrudService<TEntity extends BaseEntity, TCreateDto extends DeepPartial<TEntity>> {
    private repository;
    constructor(repository: Repository<TEntity>);
    findAll(relations?: string[]): Promise<TEntity[]>;
    findAllByRange(start: Date, end: Date, relations?: string[], select?: string[]): Promise<TEntity[]>;
    findByIdWithRelations(id: string, relations?: string[], errorMessage?: string): Promise<TEntity>;
    findById(id: string, errorMessage?: string): Promise<TEntity>;
    create(dto: TCreateDto): Promise<TEntity>;
    update(id: string, dto: DeepPartial<TEntity>): Promise<TEntity>;
    remove(id: string): Promise<any>;
}
