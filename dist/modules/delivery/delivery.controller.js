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
exports.DeliveryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_controller_1 = require("../../utils/crud.controller");
const response_1 = require("../../utils/response");
const delivery_service_1 = require("./delivery.service");
const create_delivery_dto_1 = require("./dtos/create-delivery.dto");
let DeliveryController = class DeliveryController extends crud_controller_1.CrudController {
    constructor(deliveryService) {
        super(deliveryService);
        this.deliveryService = deliveryService;
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.deliveryService.create(body);
            return new response_1.Response(result);
        });
    }
    findByCredit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.deliveryService.findByCredit(id);
            return new response_1.Response(result);
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_delivery_dto_1.CreateDeliveryDto]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get delivery by credit' }),
    (0, common_1.Get)('/credit/:id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DeliveryController.prototype, "findByCredit", null);
DeliveryController = __decorate([
    (0, swagger_1.ApiTags)('Delivery'),
    (0, common_1.Controller)('delivery'),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], DeliveryController);
exports.DeliveryController = DeliveryController;
//# sourceMappingURL=delivery.controller.js.map