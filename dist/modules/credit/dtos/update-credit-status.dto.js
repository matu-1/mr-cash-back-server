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
exports.UpdateCreditStatusDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const credit_constant_1 = require("../credit.constant");
class UpdateCreditStatusDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Number, enum: [
                    credit_constant_1.CREDIT_STATUS.CANCELLED,
                    credit_constant_1.CREDIT_STATUS.ACCEPTED,
                    credit_constant_1.CREDIT_STATUS.WAITING,
                    credit_constant_1.CREDIT_STATUS.PREAPPROVED,
                    credit_constant_1.CREDIT_STATUS.APPROVED,
                    credit_constant_1.CREDIT_STATUS.EXPIRED,
                    credit_constant_1.CREDIT_STATUS.REJECTED,
                ] }, urlContract: { required: true, type: () => String }, urlSignature: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsIn)([
        credit_constant_1.CREDIT_STATUS.CANCELLED,
        credit_constant_1.CREDIT_STATUS.ACCEPTED,
        credit_constant_1.CREDIT_STATUS.WAITING,
        credit_constant_1.CREDIT_STATUS.PREAPPROVED,
        credit_constant_1.CREDIT_STATUS.APPROVED,
        credit_constant_1.CREDIT_STATUS.EXPIRED,
        credit_constant_1.CREDIT_STATUS.REJECTED,
    ]),
    __metadata("design:type", Number)
], UpdateCreditStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", String)
], UpdateCreditStatusDto.prototype, "urlContract", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], UpdateCreditStatusDto.prototype, "urlSignature", void 0);
exports.UpdateCreditStatusDto = UpdateCreditStatusDto;
//# sourceMappingURL=update-credit-status.dto.js.map