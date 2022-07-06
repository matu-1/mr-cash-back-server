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
exports.BankAccount = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const customer_entity_1 = require("../customer/customer.entity");
let BankAccount = class BankAccount extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { holder: { required: true, type: () => String }, accountNumber: { required: true, type: () => String }, bankName: { required: true, type: () => String }, identityNumber: { required: true, type: () => String }, accountType: { required: true, type: () => String }, customerId: { required: true, type: () => String }, customer: { required: true, type: () => require("../customer/customer.entity").Customer } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], BankAccount.prototype, "holder", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, name: 'account_number' }),
    __metadata("design:type", String)
], BankAccount.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, name: 'bank_name' }),
    __metadata("design:type", String)
], BankAccount.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80, name: 'identity_number' }),
    __metadata("design:type", String)
], BankAccount.prototype, "identityNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, name: 'account_type' }),
    __metadata("design:type", String)
], BankAccount.prototype, "accountType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id' }),
    __metadata("design:type", String)
], BankAccount.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", customer_entity_1.Customer)
], BankAccount.prototype, "customer", void 0);
BankAccount = __decorate([
    (0, typeorm_1.Entity)()
], BankAccount);
exports.BankAccount = BankAccount;
//# sourceMappingURL=bank-account.entity.js.map