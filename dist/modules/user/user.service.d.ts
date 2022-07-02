import { UserRepository } from './user.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CrudService } from '../../utils/crud.service';
import { User } from './user.entity';
export declare class UserService extends CrudService<User, CreateUserDto> {
    private userRepository;
    constructor(userRepository: UserRepository);
    findAllNoUser(id: string): Promise<User[]>;
    findByEmail(email: string, id?: string): Promise<User>;
    create(dto: CreateUserDto): Promise<User>;
    update(id: string, dto: UpdateUserDto): Promise<User>;
}
