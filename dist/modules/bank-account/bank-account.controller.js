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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_controller_1 = require("../../utils/crud.controller");
const swagger_1 = require("@nestjs/swagger");
const bank_account_service_1 = require("./bank-account.service");
const create_bank_account_dto_1 = require("./dtos/create-bank-account.dto");
const update_bank_account_dto_1 = require("./dtos/update-bank-account.dto");
const response_1 = require("../../utils/response");
const common_2 = require("@nestjs/common");
let BankAccountController = class BankAccountController extends crud_controller_1.CrudController {
    constructor(bankAccountService) {
        super(bankAccountService);
        this.bankAccountService = bankAccountService;
    }
    async findByCustomer(id) {
        const result = await this.bankAccountService.findByCustomer(id);
        return new response_1.Response(result);
    }
    async create(dto) {
        const result = await this.bankAccountService.create(dto);
        return new response_1.Response(result);
    }
    async update(id, dto) {
        const result = await this.bankAccountService.update(id, dto);
        return new response_1.Response(result);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get Bank Accounts by customer' }),
    (0, common_2.Get)('customer/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "findByCustomer", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_account_dto_1.CreateBankAccountDto]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bank_account_dto_1.UpdateBankAccountDto]),
    __metadata("design:returntype", Promise)
], BankAccountController.prototype, "update", null);
BankAccountController = __decorate([
    (0, swagger_1.ApiTags)('Bank Account'),
    (0, common_1.Controller)('bank-account'),
    __metadata("design:paramtypes", [bank_account_service_1.BankAccountService])
], BankAccountController);
exports.BankAccountController = BankAccountController;
//# sourceMappingURL=bank-account.controller.js.map