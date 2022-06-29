import {
  Body,
  Controller,
  Post,
  Put,
  ParseUUIDPipe,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { CrudController } from '../../utils/crud.controller';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { Response } from 'src/utils/response';
import { UpdateNotificationDto } from './dtos/update-notification.dto';

@ApiTags('Notification')
@Controller('notification')
export class NotificationController extends CrudController<Notification> {
  constructor(private notificationService: NotificationService) {
    super(notificationService);
  }

  @ApiOperation({ summary: 'Get notification by customer' })
  @Get('customer/:id')
  async findByCustomer(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('limit') limit?: number,
  ) {
    const result = await this.notificationService.findByCustomer(id, limit);
    return new Response(result);
  }

  @Post()
  async create(@Body() dto: CreateNotificationDto) {
    const result = await this.notificationService.create(dto);
    return new Response(result);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateNotificationDto,
  ) {
    const result = await this.notificationService.update(id, dto);
    return new Response(result);
  }

  @Get('count/:customerId')
  async countNotificationUnseen(
    @Param('customerId', ParseUUIDPipe) customerId: string,
  ) {
    const result = await this.notificationService.countNotificationUnseen(
      customerId,
    );
    return new Response(result);
  }
}
