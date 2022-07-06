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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const customer_service_1 = require("../customer/customer.service");
const coupon_repository_1 = require("./coupon.repository");
let CouponService = class CouponService extends crud_service_1.CrudService {
    constructor(couponRepository, customerService) {
        super(couponRepository);
        this.couponRepository = couponRepository;
        this.customerService = customerService;
    }
    create(dto) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.customerService.findById(dto.customerId, 'Customer Not found');
            return _super.create.call(this, dto);
        });
    }
    findByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.couponRepository.manager.query(`SELECT name FROM customer WHERE referred_code = "${code}" LIMIT 1;`);
            return result[0];
        });
    }
};
CouponService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [coupon_repository_1.CouponRepository,
        customer_service_1.CustomerService])
], CouponService);
exports.CouponService = CouponService;
//# sourceMappingURL=coupon.service.js.map