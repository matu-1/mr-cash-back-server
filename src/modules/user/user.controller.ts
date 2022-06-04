import {
  Body,
  Controller,
  Get,
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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User as Auth } from '../../decorators/user.decorator';
import { User } from './user.entity';

@ApiTags('User')
@Controller('user')
export class UserController extends CrudController<User> {
  constructor(private userService: UserService) {
    super(userService);
  }

  @ApiOperation({ summary: 'Get users minus the authenticated' })
  @Get('no-user')
  async findAllNoUser(@Auth('id') id: string) {
    const result = await this.userService.findAllNoUser(id);
    return new Response(result);
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
