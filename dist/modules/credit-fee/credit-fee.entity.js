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
exports.CreditFee = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const credit_entity_1 = require("../credit/credit.entity");
const coupon_entity_1 = require("../coupon/coupon.entity");
const credit_fee_enum_1 = require("./credit-fee.enum");
let CreditFee = class CreditFee extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number }, amountPaid: { required: true, type: () => Number }, amountCoupon: { required: true, type: () => Number }, paymentMethod: { required: true, type: () => Number }, status: { required: true, type: () => Number }, paymentDate: { required: true, type: () => Date }, paidAt: { required: true, type: () => Date }, creditId: { required: true, type: () => String }, couponId: { required: true, type: () => String }, credit: { required: true, type: () => require("../credit/credit.entity").Credit }, coupon: { required: true, type: () => require("../coupon/coupon.entity").Coupon } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 16, scale: 2 }),
    __metadata("design:type", Number)
], CreditFee.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'amount_paid',
        type: 'decimal',
        precision: 16,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], CreditFee.prototype, "amountPaid", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'amount_coupon',
        type: 'decimal',
        precision: 16,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], CreditFee.prototype, "amountCoupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_method', type: 'tinyint', nullable: true }),
    __metadata("design:type", Number)
], CreditFee.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: credit_fee_enum_1.FeeStatus.Pending }),
    __metadata("design:type", Number)
], CreditFee.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_date', type: 'date' }),
    __metadata("design:type", Date)
], CreditFee.prototype, "paymentDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paid_at', nullable: true }),
    __metadata("design:type", Date)
], CreditFee.prototype, "paidAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_id' }),
    __metadata("design:type", String)
], CreditFee.prototype, "creditId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'coupon_id', nullable: true }),
    __metadata("design:type", String)
], CreditFee.prototype, "couponId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => credit_entity_1.Credit),
    (0, typeorm_1.JoinColumn)({ name: 'credit_id' }),
    __metadata("design:type", credit_entity_1.Credit)
], CreditFee.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => coupon_entity_1.Coupon),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", coupon_entity_1.Coupon)
], CreditFee.prototype, "coupon", void 0);
CreditFee = __decorate([
    (0, typeorm_1.Entity)()
], CreditFee);
exports.CreditFee = CreditFee;
//# sourceMappingURL=credit-fee.entity.js.map