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
exports.CreateCustomerDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
class CreateCustomerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String, minLength: 3 }, phone: { required: true, type: () => String, minLength: 8 }, email: { required: true, type: () => String }, birthday: { required: true, type: () => String }, status: { required: true, type: () => String }, referredCode: { required: true, type: () => String }, profilePhotoUrl: { required: true, type: () => String }, identityFrontUrl: { required: true, type: () => String }, identityBackUrl: { required: true, type: () => String }, tokenNotification: { required: true, type: () => String }, cityId: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.MinLength)(3),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_2.IsNumberString)(),
    (0, class_validator_2.MinLength)(8),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "birthday", void 0);
__decorate([
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "referredCode", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "profilePhotoUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "identityFrontUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "identityBackUrl", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "tokenNotification", void 0);
__decorate([
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.IsUUID)(),
    __metadata("design:type", String)
], CreateCustomerDto.prototype, "cityId", void 0);
exports.CreateCustomerDto = CreateCustomerDto;
//# sourceMappingURL=create-customer.dto.js.map