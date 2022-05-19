import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { MessageException } from '../../constants/message-exception';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findAll() {
    return await this.userRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: string) {
    const data = await this.userRepository.findOne(id);
    if (!data) throw new NotFoundException(MessageException.NOT_FOUND);
    return data;
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
    return this.userRepository.save(this.userRepository.create(dto));
  }

  async update(id: string, dto: UpdateUserDto) {
    const data = await this.findById(id);
    const user = await this.findByEmail(dto.email, id);
    if (user) throw new BadRequestException(MessageException.EMAIL_FOUND);
    return this.userRepository.save(this.userRepository.merge(data, dto));
  }

  async remove(id: string) {
    const data = await this.findById(id);
    return await this.userRepository.softRemove(data);
  }
}
