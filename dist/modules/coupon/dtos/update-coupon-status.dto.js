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
exports.UpdateCouponStatusDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const coupon_constants_1 = require("../coupon.constants");
class UpdateCouponStatusDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { status: { required: true, type: () => Number, enum: [coupon_constants_1.COUPON_STATUS.USED, coupon_constants_1.COUPON_STATUS.EXPIRED] } };
    }
}
__decorate([
    (0, class_validator_1.IsIn)([coupon_constants_1.COUPON_STATUS.USED, coupon_constants_1.COUPON_STATUS.EXPIRED]),
    __metadata("design:type", Number)
], UpdateCouponStatusDto.prototype, "status", void 0);
exports.UpdateCouponStatusDto = UpdateCouponStatusDto;
//# sourceMappingURL=update-coupon-status.dto.js.map