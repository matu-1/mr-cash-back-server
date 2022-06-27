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
exports.CreditStatus = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../utils/base.entity");
const credit_entity_1 = require("../credit/credit.entity");
let CreditStatus = class CreditStatus extends base_entity_1.BaseEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Number }, creditId: { required: true, type: () => String }, credit: { required: true, type: () => require("../credit/credit.entity").Credit } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint' }),
    __metadata("design:type", Number)
], CreditStatus.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'credit_id' }),
    __metadata("design:type", String)
], CreditStatus.prototype, "creditId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => credit_entity_1.Credit),
    (0, typeorm_1.JoinColumn)({ name: 'credit_id' }),
    __metadata("design:type", credit_entity_1.Credit)
], CreditStatus.prototype, "credit", void 0);
CreditStatus = __decorate([
    (0, typeorm_1.Entity)()
], CreditStatus);
exports.CreditStatus = CreditStatus;
//# sourceMappingURL=credit-status.entity.js.map