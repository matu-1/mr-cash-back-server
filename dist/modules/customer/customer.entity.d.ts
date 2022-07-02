import { BaseEntity } from '../../utils/base.entity';
import { City } from '../city/city.entity';
export declare class Customer extends BaseEntity {
    name: string;
    phone: string;
    email: string;
    birthday: Date;
    status: number;
    referredCode: string;
    profilePhotoUrl: string;
    identityFrontUrl: string;
    identityBackUrl: string;
    tokenNotification: string;
    cityId: string;
    city: City;
}
