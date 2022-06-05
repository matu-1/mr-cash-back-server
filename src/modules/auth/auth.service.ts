import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserTokenDto } from './dtos/user-token.dto';
import { BasicMapper } from '../../utils/basic-mapper';
import { CreateUserDto } from '../user/dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      delete user.password;
      return user;
    }
    return null;
  }

  login(user: User) {
    return this.getUserToken(user);
  }

  async register(body: CreateUserDto) {
    const user = await this.userService.create(body);
    return this.getUserToken(user);
  }

  renew(user: User) {
    return this.getUserToken(user);
  }

  async getProfile(id: string) {
    const user = await this.userService.findById(id);
    return user;
  }

  generateToken(user: User) {
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }

  getUserToken(user: User) {
    const dto = new UserTokenDto();
    BasicMapper.map(user, dto);
    dto.accessToken = this.generateToken(user);
    return dto;
  }
}
