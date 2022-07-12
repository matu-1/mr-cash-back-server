import { Injectable, BadRequestException } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from './notification.repository';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { CustomerService } from '../customer/customer.service';
import { SendNotification } from './dtos/send-notification.dto';
import { ConfigService } from '@nestjs/config';
import { EnviromentVariables } from 'src/utils/enviroment-variables';
import axios from 'axios';
import { ResponseNotification } from './interfaces/responseNotification';

@Injectable()
export class NotificationService extends CrudService<
  Notification,
  CreateNotificationDto
> {
  constructor(
    private notificationRepository: NotificationRepository,
    private customerService: CustomerService,
    private configService: ConfigService<EnviromentVariables>,
  ) {
    super(notificationRepository);
  }

  async findByCustomer(customerId: string, limit?: number) {
    await this.customerService.findById(
      customerId,
      'The customer does not exist',
    );
    let query = this.notificationRepository
      .createQueryBuilder('notification')
      .where('notification.customerId = :customerId', { customerId })
      .orderBy('notification.createdAt', 'DESC');
    if (limit) query = query.take(limit);
    return query.getMany();
  }

  async create(dto: CreateNotificationDto) {
    await this.customerService.findById(dto.customerId, 'Customer not found');
    return super.create(dto);
  }

  async countNotificationUnseen(customerId: string) {
    const result = await this.notificationRepository.manager.query(
      `SELECT count(*) count FROM notification WHERE customer_id = "${customerId}" AND notification.read = 0`,
    );
    return result[0];
  }

  async sendNotification(dto: SendNotification) {
    const {title, body, customerId} = dto;
    const url = 'https://fcm.googleapis.com/fcm/send';
    await this.create({title, body, customerId, read: 0});
    const { data } = await axios.post<ResponseNotification>(
      url,
      {
        to: dto.to,
        notification: { body, title },
        data: dto.data,
      },
      {
        headers: {
          Authorization: `key=${this.configService.get('NOTIFICATION_KEY')}`,
        },
      },
    );
    if (!data.success) throw new BadRequestException(data.results[0].error);
    return data;
  }
}
