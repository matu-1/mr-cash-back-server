import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserTokenDto } from './dtos/user-token.dto';
import { CreateUserDto } from '../user/dtos/create-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: User): UserTokenDto;
    register(body: CreateUserDto): Promise<UserTokenDto>;
    renew(user: User): UserTokenDto;
    getProfile(id: string): Promise<User>;
    generateToken(user: User): string;
    getUserToken(user: User): UserTokenDto;
}
