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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_token_dto_1 = require("./dtos/user-token.dto");
const basic_mapper_1 = require("../../utils/basic-mapper");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    validateUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findByEmail(email);
            if (user && bcrypt.compareSync(password, user.password)) {
                delete user.password;
                return user;
            }
            return null;
        });
    }
    login(user) {
        return this.getUserToken(user);
    }
    register(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.create(body);
            return this.getUserToken(user);
        });
    }
    renew(user) {
        return this.getUserToken(user);
    }
    getProfile(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.findById(id);
            return user;
        });
    }
    generateToken(user) {
        const payload = { role: user.role, sub: user.id, email: user.email };
        return this.jwtService.sign(payload);
    }
    getUserToken(user) {
        const dto = new user_token_dto_1.UserTokenDto();
        basic_mapper_1.BasicMapper.map(user, dto);
        dto.accessToken = this.generateToken(user);
        return dto;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map