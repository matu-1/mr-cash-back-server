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
exports.CreateFeeDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const credit_fee_enum_1 = require("../credit-fee.enum");
class CreateFeeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { amount: { required: true, type: () => Number, minimum: 0 }, amountPaid: { required: true, type: () => Number, minimum: 0 }, amountCoupon: { required: true, type: () => Number, minimum: 0 }, paymentMethod: { required: true, type: () => Number, enum: Object.values(credit_fee_enum_1.PaymentMethod) }, status: { required: true, type: () => Number, enum: Object.values(credit_fee_enum_1.FeeStatus) }, paymentDate: { required: true, type: () => Date }, paidAt: { required: true, type: () => Date }, creditId: { required: true, type: () => String }, couponId: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFeeDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFeeDto.prototype, "amountPaid", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateFeeDto.prototype, "amountCoupon", void 0);
__decorate([
    (0, class_validator_1.IsIn)(Object.values(credit_fee_enum_1.PaymentMethod)),
    __metadata("design:type", Number)
], CreateFeeDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, class_validator_1.IsIn)(Object.values(credit_fee_enum_1.FeeStatus)),
    __metadata("design:type", Number)
], CreateFeeDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateFeeDto.prototype, "paymentDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateFeeDto.prototype, "paidAt", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFeeDto.prototype, "creditId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFeeDto.prototype, "couponId", void 0);
exports.CreateFeeDto = CreateFeeDto;
//# sourceMappingURL=create-fee.dto.js.map