"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const credit_module_1 = require("../credit/credit.module");
const delivery_controller_1 = require("./delivery.controller");
const delivery_repository_1 = require("./delivery.repository");
const delivery_service_1 = require("./delivery.service");
let DeliveryModule = class DeliveryModule {
};
DeliveryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([delivery_repository_1.DeliveryRepository]), credit_module_1.CreditModule],
        controllers: [delivery_controller_1.DeliveryController],
        providers: [delivery_service_1.DeliveryService],
    })
], DeliveryModule);
exports.DeliveryModule = DeliveryModule;
//# sourceMappingURL=delivery.module.js.map