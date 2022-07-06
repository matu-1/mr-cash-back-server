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
exports.WarrantyPhoto = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const warranty_entity_1 = require("../warranty/warranty.entity");
let WarrantyPhoto = class WarrantyPhoto extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { photoUrl: { required: true, type: () => String }, warrantyId: { required: true, type: () => String }, warranty: { required: true, type: () => require("../warranty/warranty.entity").Warranty } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ name: 'photo_url', length: 300 }),
    __metadata("design:type", String)
], WarrantyPhoto.prototype, "photoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'warranty_id' }),
    __metadata("design:type", String)
], WarrantyPhoto.prototype, "warrantyId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => warranty_entity_1.Warranty, (warranty) => warranty.photos),
    (0, typeorm_1.JoinColumn)({ name: 'warranty_id' }),
    __metadata("design:type", warranty_entity_1.Warranty)
], WarrantyPhoto.prototype, "warranty", void 0);
WarrantyPhoto = __decorate([
    (0, typeorm_1.Entity)()
], WarrantyPhoto);
exports.WarrantyPhoto = WarrantyPhoto;
//# sourceMappingURL=warranty-photo.entity.js.map