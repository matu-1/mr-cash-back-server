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
var Credit_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const customer_entity_1 = require("../customer/customer.entity");
const bank_account_entity_1 = require("../bank-account/bank-account.entity");
const credit_constant_1 = require("./credit.constant");
const warranty_entity_1 = require("../warranty/warranty.entity");
const delivery_entity_1 = require("../delivery/delivery.entity");
let Credit = Credit_1 = class Credit extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { originalAmount: { required: true, type: () => Number }, totalAmount: { required: true, type: () => Number }, balance: { required: true, type: () => Number }, quantityFee: { required: true, type: () => Number }, plan: { required: true, type: () => Number }, status: { required: true, type: () => Number }, deliveryAmount: { required: true, type: () => Number }, percentageServiceFee: { required: true, type: () => Number }, percentageInterest: { required: true, type: () => Number }, urlContract: { required: true, type: () => String }, urlSignature: { required: true, type: () => String }, customerId: { required: true, type: () => String }, bankAccountId: { required: true, type: () => String }, creditPreviousId: { required: true, type: () => String }, customer: { required: true, type: () => require("../customer/customer.entity").Customer }, bankAccount: { required: true, type: () => require("../bank-account/bank-account.entity").BankAccount }, creditPrevious: { required: true, type: () => require("./credit.entity").Credit }, warranties: { required: true, type: () => [require("../warranty/warranty.entity").Warranty] }, delivery: { required: true, type: () => require("../delivery/delivery.entity").Delivery } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ name: 'original_amount', type: 'decimal', precision: 16, scale: 2 }),
    __metadata("design:type", Number)
], Credit.prototype, "originalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'total_amount',
        type: 'decimal',
        precision: 16,
        scale: 2,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 16, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Credit.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantity_fee', type: 'tinyint' }),
    __metadata("design:type", Number)
], Credit.prototype, "quantityFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", Number)
], Credit.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: credit_constant_1.CREDIT_STATUS.PENDING }),
    __metadata("design:type", Number)
], Credit.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'delivery_amount',
        type: 'decimal',
        precision: 16,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Credit.prototype, "deliveryAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'percentage_service_fee', type: 'double' }),
    __metadata("design:type", Number)
], Credit.prototype, "percentageServiceFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'percentage_interest', type: 'double' }),
    __metadata("design:type", Number)
], Credit.prototype, "percentageInterest", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url_contract', nullable: true }),
    __metadata("design:type", String)
], Credit.prototype, "urlContract", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url_signature', nullable: true }),
    __metadata("design:type", String)
], Credit.prototype, "urlSignature", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'customer_id' }),
    __metadata("design:type", String)
], Credit.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bank_account_id' }),
    __metadata("design:type", String)
], Credit.prototype, "bankAccountId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_previous_id', nullable: true }),
    __metadata("design:type", String)
], Credit.prototype, "creditPreviousId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer),
    (0, typeorm_1.JoinColumn)({ name: 'customer_id' }),
    __metadata("design:type", customer_entity_1.Customer)
], Credit.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bank_account_entity_1.BankAccount),
    (0, typeorm_1.JoinColumn)({ name: 'bank_account_id' }),
    __metadata("design:type", bank_account_entity_1.BankAccount)
], Credit.prototype, "bankAccount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Credit_1),
    (0, typeorm_1.JoinColumn)({ name: 'credit_previous_id' }),
    __metadata("design:type", Credit)
], Credit.prototype, "creditPrevious", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => warranty_entity_1.Warranty, (warranty) => warranty.credit),
    __metadata("design:type", Array)
], Credit.prototype, "warranties", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => delivery_entity_1.Delivery, (delivery) => delivery.credit),
    __metadata("design:type", delivery_entity_1.Delivery)
], Credit.prototype, "delivery", void 0);
Credit = Credit_1 = __decorate([
    (0, typeorm_1.Entity)()
], Credit);
exports.Credit = Credit;
//# sourceMappingURL=credit.entity.js.map