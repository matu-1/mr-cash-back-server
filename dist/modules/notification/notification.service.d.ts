import { CrudService } from '../../utils/crud.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from './notification.repository';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { CustomerService } from '../customer/customer.service';
export declare class NotificationService extends CrudService<Notification, CreateNotificationDto> {
    private notificationRepository;
    private customerService;
    constructor(notificationRepository: NotificationRepository, customerService: CustomerService);
    findByCustomer(customerId: string, limit?: number): Promise<Notification[]>;
    create(dto: CreateNotificationDto): Promise<Notification>;
}
