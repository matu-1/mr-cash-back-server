import { BaseEntity } from '../../utils/base.entity';
import { Warranty } from '../warranty/warranty.entity';
export declare class WarrantyPhoto extends BaseEntity {
    photoUrl: string;
    warrantyId: string;
    warranty: Warranty;
}
