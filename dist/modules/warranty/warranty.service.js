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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarrantyService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const warranty_repository_1 = require("./warranty.repository");
const credit_service_1 = require("../credit/credit.service");
const category_service_1 = require("../category/category.service");
let WarrantyService = class WarrantyService extends crud_service_1.CrudService {
    constructor(warrantyRepository, creditService, categoryService) {
        super(warrantyRepository);
        this.warrantyRepository = warrantyRepository;
        this.creditService = creditService;
        this.categoryService = categoryService;
    }
    async create(dto) {
        await this.creditService.findById(dto.creditId, 'The credit does not exist');
        await this.categoryService.findById(dto.creditId, 'The category does not exist');
        return super.create(dto);
    }
    async update(id, dto) {
        await this.findById(id, 'The warranty does not exist');
        if (dto.creditId)
            await this.creditService.findById(dto.creditId, 'The credit does not exist');
        if (dto.categoryId)
            await this.categoryService.findById(dto.creditId, 'The category does not exist');
        return super.update(id, dto);
    }
    async findByCredit(creditId) {
        await this.creditService.findById(creditId, 'The Credit does not exist');
        return this.warrantyRepository.find({
            where: {
                creditId,
            },
            relations: ['photos'],
        });
    }
};
WarrantyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [warranty_repository_1.WarrantyRepository,
        credit_service_1.CreditService,
        category_service_1.CategoryService])
], WarrantyService);
exports.WarrantyService = WarrantyService;
//# sourceMappingURL=warranty.service.js.map