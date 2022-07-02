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
exports.OfferCreditDto = void 0;
const openapi = require("@nestjs/swagger");
const create_credit_dto_1 = require("./create-credit.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const offer_warranty_dto_1 = require("./offer-warranty.dto");
class OfferCreditDto extends (0, swagger_1.OmitType)(create_credit_dto_1.CreateCreditDto, [
    'customerId',
    'bankAccountId',
    'plan',
    'warranties',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, warranties: { required: true, type: () => [require("./offer-warranty.dto").OfferWarranty] } };
    }
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OfferCreditDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => offer_warranty_dto_1.OfferWarranty),
    __metadata("design:type", Array)
], OfferCreditDto.prototype, "warranties", void 0);
exports.OfferCreditDto = OfferCreditDto;
//# sourceMappingURL=offer-credit.dto.js.map