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
exports.CreditFeeService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const credit_fee_entity_1 = require("./credit-fee.entity");
const credit_fee_repository_1 = require("./credit-fee.repository");
const credit_service_1 = require("../credit/credit.service");
const credit_entity_1 = require("../credit/credit.entity");
const credit_constant_1 = require("../credit/credit.constant");
const credit_status_entity_1 = require("../credit-status/credit-status.entity");
let CreditFeeService = class CreditFeeService extends crud_service_1.CrudService {
    constructor(creditFeeRepository, creditService) {
        super(creditFeeRepository);
        this.creditFeeRepository = creditFeeRepository;
        this.creditService = creditService;
    }
    findByCredit(creditId, verify = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (verify)
                yield this.creditService.findById(creditId, 'The credit does not exist');
            return this.creditFeeRepository.find({
                where: { creditId },
                order: { paymentDate: 'ASC' },
            });
        });
    }
    update(id, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const fee = yield this.findByIdWithRelations(id, ['credit']);
            return this.creditFeeRepository.manager.transaction((manager) => __awaiter(this, void 0, void 0, function* () {
                const dataToSaved = [];
                dataToSaved.push(manager.save(credit_fee_entity_1.CreditFee, Object.assign({ id }, dto)));
                if (dto.amountPaid) {
                    const fees = yield this.findByCredit(fee.creditId, false);
                    const status = fees.pop().id == id ? credit_constant_1.CREDIT_STATUS.COMPLETED : undefined;
                    if (status)
                        dataToSaved.push(manager.save(credit_status_entity_1.CreditStatus, {
                            status: status,
                            creditId: fee.creditId,
                        }));
                    dataToSaved.push(manager.save(credit_entity_1.Credit, {
                        id: fee.creditId,
                        balance: Number(fee.credit.balance) + dto.amountPaid,
                        status,
                    }));
                }
                const [savedFee] = yield Promise.all(dataToSaved);
                return savedFee;
            }));
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