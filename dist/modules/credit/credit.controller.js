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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.CreditController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_controller_1 = require("../../utils/crud.controller");
const credit_service_1 = require("./credit.service");
const swagger_1 = require("@nestjs/swagger");
const create_credit_dto_1 = require("./dtos/create-credit.dto");
const response_1 = require("../../utils/response");
const update_credit_status_dto_1 = require("./dtos/update-credit-status.dto");
const offer_credit_dto_1 = require("./dtos/offer-credit.dto");
const common_2 = require("@nestjs/common");
let CreditController = class CreditController extends crud_controller_1.CrudController {
    constructor(creditService) {
        super(creditService);
        this.creditService = creditService;
    }
    findByCustomer(id, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditService.findByCustomer(id, limit);
            return new response_1.Response(result);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditService.create(dto);
            return new response_1.Response(result);
        });
    }
    offer(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditService.offer(dto);
            return new response_1.Response(result);
        });
    }
    changeStatus(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditService.changeStatus(id, dto);
            return new response_1.Response(result);
        });
    }
    getTotalByStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditService.getTotalByStatus();
            return new response_1.Response(result);
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get credits by customer' }),
    (0, common_1.Get)('customer/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_2.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "findByCustomer", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_credit_dto_1.CreateCreditDto]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('offer'),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offer_credit_dto_1.OfferCreditDto]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "offer", null);
__decorate([
    (0, common_1.Put)('change-status/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_credit_status_dto_1.UpdateCreditStatusDto]),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "changeStatus", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Get Total by Status (Active, Canceled, Expired, Complete)',
    }),
    (0, common_1.Get)('total-by-status'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CreditController.prototype, "getTotalByStatus", null);
CreditController = __decorate([
    (0, swagger_1.ApiTags)('Credit'),
    (0, common_1.Controller)('credit'),
    __metadata("design:paramtypes", [credit_service_1.CreditService])
], CreditController);
exports.CreditController = CreditController;
//# sourceMappingURL=credit.controller.js.map