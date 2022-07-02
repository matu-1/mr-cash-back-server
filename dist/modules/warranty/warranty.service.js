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
    create(dto) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.creditService.findById(dto.creditId, 'The credit does not exist');
            yield this.categoryService.findById(dto.creditId, 'The category does not exist');
            return _super.create.call(this, dto);
        });
    }
    update(id, dto) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id, 'The warranty does not exist');
            if (dto.creditId)
                yield this.creditService.findById(dto.creditId, 'The credit does not exist');
            if (dto.categoryId)
                yield this.categoryService.findById(dto.creditId, 'The category does not exist');
            return _super.update.call(this, id, dto);
        });
    }
    findByCredit(creditId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.creditService.findById(creditId, 'The Credit does not exist');
            return this.warrantyRepository.find({
                where: {
                    creditId,
                },
                relations: ['photos', 'category'],
            });
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