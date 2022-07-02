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
exports.Delivery = void 0;
const openapi = require("@nestjs/swagger");
const base_entity_1 = require("../../utils/base.entity");
const typeorm_1 = require("typeorm");
const credit_entity_1 = require("../credit/credit.entity");
let Delivery = class Delivery extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number }, address: { required: true, type: () => String }, reference: { required: true, type: () => String }, amount: { required: true, type: () => Number }, creditId: { required: true, type: () => String }, credit: { required: true, type: () => require("../credit/credit.entity").Credit } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Delivery.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double' }),
    __metadata("design:type", Number)
], Delivery.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Delivery.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Delivery.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 16, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Delivery.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_id' }),
    __metadata("design:type", String)
], Delivery.prototype, "creditId", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => credit_entity_1.Credit, (credit) => credit.delivery),
    (0, typeorm_1.JoinColumn)({ name: 'credit_id' }),
    __metadata("design:type", credit_entity_1.Credit)
], Delivery.prototype, "credit", void 0);
Delivery = __decorate([
    (0, typeorm_1.Entity)()
], Delivery);
exports.Delivery = Delivery;
//# sourceMappingURL=delivery.entity.js.map