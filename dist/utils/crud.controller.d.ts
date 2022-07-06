import { CrudService } from './crud.service';
import { BaseEntity } from './base.entity';
import { Response } from 'src/utils/response';
export declare class CrudController<TEntity extends BaseEntity> {
    private service;
    constructor(service: CrudService<TEntity, any>);
    findAll(): Promise<Response>;
    findAllByRange(start: string, end: string): Promise<Response>;
    findById(id: string): Promise<Response>;
    remove(id: string): Promise<Response>;
}
