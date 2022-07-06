import { CrudService } from '../../utils/crud.service';
import { Notification } from './notification.entity';
import { NotificationRepository } from './notification.repository';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { CustomerService } from '../customer/customer.service';
import { SendNotification } from './dtos/send-notification.dto';
import { ConfigService } from '@nestjs/config';
import { EnviromentVariables } from 'src/utils/enviroment-variables';
import { ResponseNotification } from './interfaces/responseNotification';
export declare class NotificationService extends CrudService<Notification, CreateNotificationDto> {
    private notificationRepository;
    private customerService;
    private configService;
    constructor(notificationRepository: NotificationRepository, customerService: CustomerService, configService: ConfigService<EnviromentVariables>);
    findByCustomer(customerId: string, limit?: number): Promise<Notification[]>;
    create(dto: CreateNotificationDto): Promise<Notification>;
    countNotificationUnseen(customerId: string): Promise<any>;
    sendNotification(dto: SendNotification): Promise<ResponseNotification>;
}
