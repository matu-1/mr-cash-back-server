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
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const category_entity_1 = require("../category/category.entity");
const credit_entity_1 = require("../credit/credit.entity");
const warranty_photo_entity_1 = require("../warranty-photo/warranty-photo.entity");
let Warranty = class Warranty extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { brand: { required: true, type: () => String }, status: { required: true, type: () => String }, description: { required: true, type: () => String }, value: { required: true, type: () => Number }, categoryId: { required: true, type: () => String }, creditId: { required: true, type: () => String }, category: { required: true, type: () => require("../category/category.entity").Category }, credit: { required: true, type: () => require("../credit/credit.entity").Credit }, photos: { required: true, type: () => [require("../warranty-photo/warranty-photo.entity").WarrantyPhoto] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], Warranty.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Warranty.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Warranty.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 16, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Warranty.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_id' }),
    __metadata("design:type", String)
], Warranty.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_id' }),
    __metadata("design:type", String)
], Warranty.prototype, "creditId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.Category)
], Warranty.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => credit_entity_1.Credit),
    (0, typeorm_1.JoinColumn)({ name: 'credit_id' }),
    __metadata("design:type", credit_entity_1.Credit)
], Warranty.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => warranty_photo_entity_1.WarrantyPhoto, (photo) => photo.warranty),
    __metadata("design:type", Array)
], Warranty.prototype, "photos", void 0);
Warranty = __decorate([
    (0, typeorm_1.Entity)()
], Warranty);
exports.Warranty = Warranty;
//# sourceMappingURL=warranty.entity.js.map