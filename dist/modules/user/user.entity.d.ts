import { BaseEntity } from 'src/utils/base.entity';
export declare class User extends BaseEntity {
    name: string;
    email: string;
    password: string;
    role: string;
    hashPassword(): void;
}
