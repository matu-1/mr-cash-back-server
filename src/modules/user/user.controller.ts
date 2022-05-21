import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Response } from 'src/utils/response';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CrudController } from '../../utils/crud.controller';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<User> {
  constructor(private userService: UserService) {
    super(userService);
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    const result = await this.userService.create(body);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateUserDto,
  ) {
    const result = await this.userService.update(id, body);
    return new Response(result);
  }
}
