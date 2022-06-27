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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const bank_account_repository_1 = require("./bank-account.repository");
const customer_service_1 = require("../customer/customer.service");
let BankAccountService = class BankAccountService extends crud_service_1.CrudService {
    constructor(bankAccountRepository, customerService) {
        super(bankAccountRepository);
        this.bankAccountRepository = bankAccountRepository;
        this.customerService = customerService;
    }
    async findByCustomer(customerId) {
        await this.customerService.findById(customerId, 'The customer does not exist');
        return this.bankAccountRepository.find({
            where: { customerId },
        });
    }
    async create(dto) {
        await this.customerService.findById(dto.customerId, 'The customer does not exist');
        return super.create(dto);
    }
    async update(id, dto) {
        if (dto.customerId)
            await this.customerService.findById(dto.customerId, 'The customer does not exist');
        return super.update(id, dto);
    }
};
BankAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bank_account_repository_1.BankAccountRepository,
        customer_service_1.CustomerService])
], BankAccountService);
exports.BankAccountService = BankAccountService;
//# sourceMappingURL=bank-account.service.js.map