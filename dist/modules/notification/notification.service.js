"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const notification_repository_1 = require("./notification.repository");
const customer_service_1 = require("../customer/customer.service");
let NotificationService = class NotificationService extends crud_service_1.CrudService {
    constructor(notificationRepository, customerService) {
        super(notificationRepository);
        this.notificationRepository = notificationRepository;
        this.customerService = customerService;
    }
    findByCustomer(customerId, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerService.findById(customerId, 'The customer does not exist');
            let query = this.notificationRepository
                .createQueryBuilder('notification')
                .where('notification.customerId = :customerId', { customerId })
                .orderBy('notification.createdAt', 'DESC');
            if (limit)
                query = query.take(limit);
            return query.getMany();
        });
    }
    create(dto) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerService.findById(dto.customerId, 'Customer not found');
            return _super.create.call(this, dto);
        });
    }
};
NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_repository_1.NotificationRepository,
        customer_service_1.CustomerService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map