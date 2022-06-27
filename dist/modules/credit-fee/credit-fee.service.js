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
exports.CreditFeeService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const credit_fee_entity_1 = require("./credit-fee.entity");
const credit_fee_repository_1 = require("./credit-fee.repository");
const credit_service_1 = require("../credit/credit.service");
const credit_entity_1 = require("../credit/credit.entity");
let CreditFeeService = class CreditFeeService extends crud_service_1.CrudService {
    constructor(creditFeeRepository, creditService) {
        super(creditFeeRepository);
        this.creditFeeRepository = creditFeeRepository;
        this.creditService = creditService;
    }
    async findByCredit(creditId) {
        await this.creditService.findById(creditId, 'The credit does not exist');
        return this.creditFeeRepository.find({
            where: { creditId },
            order: { paymentDate: 'ASC' },
        });
    }
    async update(id, dto) {
        const fee = await this.findByIdWithRelations(id, ['credit']);
        return this.creditFeeRepository.manager.transaction(async (manager) => {
            const data = await manager.save(credit_fee_entity_1.CreditFee, Object.assign({ id }, dto));
            if (dto.amountPaid)
                await manager.save(credit_entity_1.Credit, {
                    id: fee.creditId,
                    balance: Number(fee.credit.balance) + dto.amountPaid,
                });
            return data;
        });
    }
};
CreditFeeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [credit_fee_repository_1.CreditFeeRepository,
        credit_service_1.CreditService])
], CreditFeeService);
exports.CreditFeeService = CreditFeeService;
//# sourceMappingURL=credit-fee.service.js.map