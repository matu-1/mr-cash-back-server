import { CrudController } from '../../utils/crud.controller';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dtos/create-notification.dto';
import { Response } from 'src/utils/response';
import { UpdateNotificationDto } from './dtos/update-notification.dto';
export declare class NotificationController extends CrudController<Notification> {
    private notificationService;
    constructor(notificationService: NotificationService);
    findByCustomer(id: string, limit?: number): Promise<Response>;
    create(dto: CreateNotificationDto): Promise<Response>;
    update(id: string, dto: UpdateNotificationDto): Promise<Response>;
}
