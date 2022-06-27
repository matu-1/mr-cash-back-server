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
exports.UserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const response_1 = require("../../utils/response");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dtos/create-user.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const crud_controller_1 = require("../../utils/crud.controller");
const swagger_1 = require("@nestjs/swagger");
const user_decorator_1 = require("../../decorators/user.decorator");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const roles_1 = require("../../constants/roles");
let UserController = class UserController extends crud_controller_1.CrudController {
    constructor(userService) {
        super(userService);
        this.userService = userService;
    }
    async findAllNoUser(id) {
        const result = await this.userService.findAllNoUser(id);
        return new response_1.Response(result);
    }
    async create(body) {
        const result = await this.userService.create(body);
        return new response_1.Response(result);
    }
    async update(id, body) {
        const result = await this.userService.update(id, body);
        return new response_1.Response(result);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(roles_1.Role.Admin),
    (0, swagger_1.ApiOperation)({ summary: 'Get users minus the authenticated' }),
    (0, common_1.Get)('no-user'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, user_decorator_1.User)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAllNoUser", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_1.Role.Admin),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_1.Role.Admin),
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../../utils/response").Response }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map