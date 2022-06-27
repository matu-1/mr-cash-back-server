import { BaseEntity } from '../../utils/base.entity';
import { Category } from '../category/category.entity';
import { Credit } from '../credit/credit.entity';
import { WarrantyPhoto } from '../warranty-photo/warranty-photo.entity';
export declare class Warranty extends BaseEntity {
    brand: string;
    status: string;
    description: string;
    value: number;
    categoryId: string;
    creditId: string;
    category: Category;
    credit: Credit;
    photos: WarrantyPhoto[];
}
