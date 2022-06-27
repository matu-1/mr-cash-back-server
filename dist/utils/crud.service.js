"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const message_exception_1 = require("../constants/message-exception");
const common_1 = require("@nestjs/common");
class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(relations) {
        return await this.repository.find({
            order: { createdAt: 'DESC' },
            relations,
        });
    }
    async findAllByRange(start, end, relations) {
        console.log('start:', start);
        console.log('end:', end);
        let query = this.repository
            .createQueryBuilder('g')
            .where('g.createdAt BETWEEN :start and :end', { start, end });
        relations === null || relations === void 0 ? void 0 : relations.forEach((relation) => {
            query = query.leftJoinAndSelect(`g.${relation}`, relation);
        });
        return await query.orderBy('g.createdAt', 'DESC').getMany();
    }
    async findByIdWithRelations(id, relations, errorMessage = message_exception_1.MessageException.NOT_FOUND) {
        const data = await this.repository.findOne(id, { relations });
        if (!data)
            throw new common_1.NotFoundException(errorMessage);
        return data;
    }
    async findById(id, errorMessage = message_exception_1.MessageException.NOT_FOUND) {
        return this.findByIdWithRelations(id, undefined, errorMessage);
    }
    async create(dto) {
        return await this.repository.save(this.repository.create(dto));
    }
    async update(id, dto) {
        const data = await this.findById(id);
        return this.repository.save(this.repository.merge(data, dto));
    }
    async remove(id) {
        const data = await this.findById(id);
        return this.repository.softRemove(data);
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crud.service.js.map