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
exports.CreateCreditDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const config_1 = require("../../../constants/config");
const credit_constant_1 = require("../credit.constant");
const warranty_dto_1 = require("./warranty.dto");
class CreateCreditDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { originalAmount: { required: true, type: () => Number, minimum: config_1.CONFIG.CREDIT.MIN_AMOUNT, maximum: config_1.CONFIG.CREDIT.MAX_AMOUNT }, totalAmount: { required: true, type: () => Number }, balance: { required: true, type: () => Number }, quantityFee: { required: true, type: () => Number }, plan: { required: true, type: () => Number, enum: [credit_constant_1.PLAN.WEEKLY, credit_constant_1.PLAN.MONTHLY] }, status: { required: true, type: () => Number }, deliveryAmount: { required: true, type: () => Number }, percentageServiceFee: { required: true, type: () => Number }, percentageInterest: { required: true, type: () => Number }, customerId: { required: true, type: () => String }, bankAccountId: { required: true, type: () => String }, creditPreviousId: { required: true, type: () => String }, warranties: { required: true, type: () => [require("./warranty.dto").Warranty] } };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(config_1.CONFIG.CREDIT.MIN_AMOUNT),
    (0, class_validator_1.Max)(config_1.CONFIG.CREDIT.MAX_AMOUNT),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "originalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "quantityFee", void 0);
__decorate([
    (0, class_validator_1.IsIn)([credit_constant_1.PLAN.WEEKLY, credit_constant_1.PLAN.MONTHLY]),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "plan", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "deliveryAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "percentageServiceFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", Number)
], CreateCreditDto.prototype, "percentageInterest", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCreditDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCreditDto.prototype, "bankAccountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", String)
], CreateCreditDto.prototype, "creditPreviousId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => warranty_dto_1.Warranty),
    __metadata("design:type", Array)
], CreateCreditDto.prototype, "warranties", void 0);
exports.CreateCreditDto = CreateCreditDto;
//# sourceMappingURL=create-credit.dto.js.map