import { Response } from 'src/utils/response';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CrudController } from '../../utils/crud.controller';
import { User } from './user.entity';
export declare class UserController extends CrudController<User> {
    private userService;
    constructor(userService: UserService);
    findAllNoUser(id: string): Promise<Response>;
    create(body: CreateUserDto): Promise<Response>;
    update(id: string, body: UpdateUserDto): Promise<Response>;
}
