"use strict";
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
exports.CrudService = void 0;
const message_exception_1 = require("../constants/message-exception");
const common_1 = require("@nestjs/common");
class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    findAll(relations) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find({
                order: { createdAt: 'DESC' },
                relations,
            });
        });
    }
    findAllByRange(start, end, relations) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('start:', start);
            console.log('end:', end);
            let query = this.repository
                .createQueryBuilder('g')
                .where('g.createdAt BETWEEN :start and :end', { start, end });
            relations === null || relations === void 0 ? void 0 : relations.forEach((relation) => {
                query = query.leftJoinAndSelect(`g.${relation}`, relation);
            });
            return yield query.orderBy('g.createdAt', 'DESC').getMany();
        });
    }
    findByIdWithRelations(id, relations, errorMessage = message_exception_1.MessageException.NOT_FOUND) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.findOne(id, { relations });
            if (!data)
                throw new common_1.NotFoundException(errorMessage);
            return data;
        });
    }
    findById(id, errorMessage = message_exception_1.MessageException.NOT_FOUND) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findByIdWithRelations(id, undefined, errorMessage);
        });
    }
    create(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.save(this.repository.create(dto));
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.findById(id);
            return this.repository.save(this.repository.merge(data, dto));
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.findById(id);
            return this.repository.softRemove(data);
        });
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map