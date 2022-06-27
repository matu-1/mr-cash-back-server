import { Request } from 'express';
import { AuthService } from './auth.service';
import { Response } from '../../utils/response';
import { CreateUserDto } from '../user/dtos/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): Promise<Response>;
    register(body: CreateUserDto): Promise<Response>;
    getProfile(id: string): Promise<Response>;
    renewToken(user: any): Response;
}
