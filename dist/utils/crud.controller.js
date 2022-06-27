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
exports.CrudController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const response_1 = require("./response");
const swagger_1 = require("@nestjs/swagger");
const date_1 = require("./date");
class CrudController {
    constructor(service) {
        this.service = service;
    }
    async findAll() {
        const result = await this.service.findAll();
        return new response_1.Response(result);
    }
    async findAllByRange(start, end) {
        const startDate = start ? new Date(start) : date_1.DateUtils.getMinToday();
        const endDate = end ? new Date(end) : date_1.DateUtils.getMaxToday();
        const result = await this.service.findAllByRange(startDate, endDate);
        return new response_1.Response(result);
    }
    async findById(id) {
        const result = await this.service.findById(id);
        return new response_1.Response(result);
    }
    async remove(id) {
        const result = await this.service.remove(id);
        return new response_1.Response(result);
    }
}
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Record list' }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: require("./response").Response }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Record list by date range' }),
    (0, common_1.Get)('range'),
    openapi.ApiResponse({ status: 200, type: require("./response").Response }),
    __param(0, (0, common_1.Query)('start')),
    __param(1, (0, common_1.Query)('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "findAllByRange", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get by id' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "findById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove' }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrudController.prototype, "remove", null);
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map