"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const city_module_1 = require("./modules/city/city.module");
const bank_account_module_1 = require("./modules/bank-account/bank-account.module");
const customer_module_1 = require("./modules/customer/customer.module");
const coupon_module_1 = require("./modules/coupon/coupon.module");
const category_module_1 = require("./modules/category/category.module");
const credit_module_1 = require("./modules/credit/credit.module");
const warranty_module_1 = require("./modules/warranty/warranty.module");
const warranty_photo_module_1 = require("./modules/warranty-photo/warranty-photo.module");
const credit_status_module_1 = require("./modules/credit-status/credit-status.module");
const credit_fee_module_1 = require("./modules/credit-fee/credit-fee.module");
const notification_module_1 = require("./modules/notification/notification.module");
const delivery_module_1 = require("./modules/delivery/delivery.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            city_module_1.CityModule,
            bank_account_module_1.BankAccountModule,
            customer_module_1.CustomerModule,
            coupon_module_1.CouponModule,
            category_module_1.CategoryModule,
            credit_module_1.CreditModule,
            warranty_module_1.WarrantyModule,
            warranty_photo_module_1.WarrantyPhotoModule,
            credit_status_module_1.CreditStatusModule,
            credit_fee_module_1.CreditFeeModule,
            notification_module_1.NotificationModule,
            delivery_module_1.DeliveryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map