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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const response_1 = require("../../utils/response");
const city_service_1 = require("./city.service");
const swagger_1 = require("@nestjs/swagger");
const crud_controller_1 = require("../../utils/crud.controller");
const create_city_dto_1 = require("./dtos/create-city.dto");
const update_city_dto_1 = require("./dtos/update-city.dto");
let CityController = class CityController extends crud_controller_1.CrudController {
    constructor(cityService) {
        super(cityService);
        this.cityService = cityService;
    }
    async create(body) {
        const result = await this.cityService.create(body);
        return new response_1.Response(result);
    }
    async update(id, body) {
        const result = await this.cityService.update(id, body);
        return new response_1.Response(result);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_city_dto_1.UpdateCityDto]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "update", null);
CityController = __decorate([
    (0, swagger_1.ApiTags)('City'),
    (0, common_1.Controller)('city'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map