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
exports.Warranty = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class Warranty {
    static _OPENAPI_METADATA_FACTORY() {
        return { brand: { required: true, type: () => String }, status: { required: true, type: () => String }, description: { required: true, type: () => String }, categoryId: { required: true, type: () => String }, creditId: { required: true, type: () => String }, photosUrl: { required: true, type: () => [String] } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Warranty.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Warranty.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], Warranty.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], Warranty.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ readOnly: true }),
    __metadata("design:type", String)
], Warranty.prototype, "creditId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsUrl)({}, { each: true }),
    __metadata("design:type", Array)
], Warranty.prototype, "photosUrl", void 0);
exports.Warranty = Warranty;
//# sourceMappingURL=warranty.dto.js.map