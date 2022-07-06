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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("./user.repository");
const message_exception_1 = require("../../constants/message-exception");
const crud_service_1 = require("../../utils/crud.service");
let UserService = class UserService extends crud_service_1.CrudService {
    constructor(userRepository) {
        super(userRepository);
        this.userRepository = userRepository;
    }
    findAllNoUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository
                .createQueryBuilder('user')
                .where('user.id <> :id', { id })
                .orderBy('user.createdAt', 'DESC')
                .getMany();
        });
    }
    findByEmail(email, id = '') {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository
                .createQueryBuilder()
                .where('email = :email and id <> :id', { email, id })
                .getOne();
        });
    }
    create(dto) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findByEmail(dto.email);
            if (user)
                throw new common_1.BadRequestException(message_exception_1.MessageException.EMAIL_FOUND);
            return _super.create.call(this, dto);
        });
    }
    update(id, dto) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.findByEmail(dto.email, id);
            if (user)
                throw new common_1.BadRequestException(message_exception_1.MessageException.EMAIL_FOUND);
            return _super.update.call(this, id, dto);
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map