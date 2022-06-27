import { BaseEntity } from '../../utils/base.entity';
export declare class Notification extends BaseEntity {
    title: string;
    body: string;
    read: number;
    customerId: string;
}
