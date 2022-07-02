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
exports.CreditFeeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_controller_1 = require("../../utils/crud.controller");
const credit_fee_service_1 = require("./credit-fee.service");
const swagger_1 = require("@nestjs/swagger");
const response_1 = require("../../utils/response");
const update_fee_dto_1 = require("./dtos/update-fee.dto");
let CreditFeeController = class CreditFeeController extends crud_controller_1.CrudController {
    constructor(creditFeeService) {
        super(creditFeeService);
        this.creditFeeService = creditFeeService;
    }
    findByCredit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditFeeService.findByCredit(id);
            return new response_1.Response(result);
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.creditFeeService.update(id, dto);
            return new response_1.Response(result);
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get credit fees by Credit' }),
    (0, common_1.Get)('credit/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CreditFeeController.prototype, "findByCredit", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fee_dto_1.UpdateFeeDto]),
    __metadata("design:returntype", Promise)
], CreditFeeController.prototype, "update", null);
CreditFeeController = __decorate([
    (0, swagger_1.ApiTags)('Credit Fee'),
    (0, common_1.Controller)('credit-fee'),
    __metadata("design:paramtypes", [credit_fee_service_1.CreditFeeService])
], CreditFeeController);
exports.CreditFeeController = CreditFeeController;
//# sourceMappingURL=credit-fee.controller.js.map