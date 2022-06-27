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
exports.Customer = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const city_entity_1 = require("../city/city.entity");
let Customer = class Customer extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, phone: { required: true, type: () => String }, email: { required: true, type: () => String }, birthday: { required: true, type: () => Date }, status: { required: true, type: () => String }, referredCode: { required: true, type: () => String }, profilePhotoUrl: { required: true, type: () => String }, identityFrontUrl: { required: true, type: () => String }, identityBackUrl: { required: true, type: () => String }, tokenNotification: { required: true, type: () => String }, cityId: { required: true, type: () => String }, city: { required: true, type: () => require("../city/city.entity").City } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 11 }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Customer.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40, default: 'enabled' }),
    __metadata("design:type", String)
], Customer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, name: 'referred_code' }),
    __metadata("design:type", String)
], Customer.prototype, "referredCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300, name: 'profile_photo_url', default: '' }),
    __metadata("design:type", String)
], Customer.prototype, "profilePhotoUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300, name: 'identity_front_url', default: '' }),
    __metadata("design:type", String)
], Customer.prototype, "identityFrontUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 300, name: 'identity_back_url', default: '' }),
    __metadata("design:type", String)
], Customer.prototype, "identityBackUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 250, name: 'token_notification', default: '' }),
    __metadata("design:type", String)
], Customer.prototype, "tokenNotification", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'city_id' }),
    __metadata("design:type", String)
], Customer.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.City),
    (0, typeorm_1.JoinColumn)({ name: 'city_id' }),
    __metadata("design:type", city_entity_1.City)
], Customer.prototype, "city", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)()
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map