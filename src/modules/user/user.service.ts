import { Injectable, BadRequestException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MessageException } from '../../constants/message-exception';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CrudService } from '../../utils/crud.service';
import { User } from './user.entity';

@Injectable()
export class UserService extends CrudService<User, CreateUserDto> {
  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }

  async findAllNoUser(id: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.id <> :id', { id })
      .orderBy('user.createdAt', 'DESC')
      .getMany();
  }

  async findByEmail(email: string, id = '') {
    return await this.userRepository
      .createQueryBuilder()
      .where('email = :email and id <> :id', { email, id })
      .getOne();
  }

  async create(dto: CreateUserDto) {
    const user = await this.findByEmail(dto.email);
    if (user) throw new BadRequestException(MessageException.EMAIL_FOUND);
    return super.create(dto);
  }

  async update(id: string, dto: UpdateUserDto) {
    const user = await this.findByEmail(dto.email, id);
    if (user) throw new BadRequestException(MessageException.EMAIL_FOUND);
    return super.update(id, dto);
  }
}
