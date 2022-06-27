"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditFeeModule = void 0;
const common_1 = require("@nestjs/common");
const credit_fee_service_1 = require("./credit-fee.service");
const credit_fee_controller_1 = require("./credit-fee.controller");
const typeorm_1 = require("@nestjs/typeorm");
const credit_fee_repository_1 = require("./credit-fee.repository");
const credit_module_1 = require("../credit/credit.module");
let CreditFeeModule = class CreditFeeModule {
};
CreditFeeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([credit_fee_repository_1.CreditFeeRepository]), credit_module_1.CreditModule],
        providers: [credit_fee_service_1.CreditFeeService],
        controllers: [credit_fee_controller_1.CreditFeeController],
    })
], CreditFeeModule);
exports.CreditFeeModule = CreditFeeModule;
//# sourceMappingURL=credit-fee.module.js.map