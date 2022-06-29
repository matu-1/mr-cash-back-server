import { Injectable } from '@nestjs/common';
import { CrudService } from '../../utils/crud.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from './notification.repository';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { CustomerService } from '../customer/customer.service';

@Injectable()
export class NotificationService extends CrudService<
  Notification,
  CreateNotificationDto
> {
  constructor(
    private notificationRepository: NotificationRepository,
    private customerService: CustomerService,
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
      `SELECT count(*) count FROM notification WHERE customer_id = "${customerId}" AND read = 0`,
    );
    return result[0];
  }
}
