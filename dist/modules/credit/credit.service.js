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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditService = void 0;
const common_1 = require("@nestjs/common");
const crud_service_1 = require("../../utils/crud.service");
const credit_entity_1 = require("./credit.entity");
const credit_repository_1 = require("./credit.repository");
const customer_service_1 = require("../customer/customer.service");
const bank_account_service_1 = require("../bank-account/bank-account.service");
const config_1 = require("../../constants/config");
const warranty_photo_entity_1 = require("../warranty-photo/warranty-photo.entity");
const warranty_entity_1 = require("../warranty/warranty.entity");
const message_exception_1 = require("../../constants/message-exception");
const credit_status_entity_1 = require("../credit-status/credit-status.entity");
const credit_constant_1 = require("./credit.constant");
const credit_fee_entity_1 = require("../credit-fee/credit-fee.entity");
let CreditService = class CreditService extends crud_service_1.CrudService {
    constructor(creditRepository, customerService, bankAccountService) {
        super(creditRepository);
        this.creditRepository = creditRepository;
        this.customerService = customerService;
        this.bankAccountService = bankAccountService;
    }
    async findById(id, errorMessage = message_exception_1.MessageException.NOT_FOUND) {
        return this.findByIdWithRelations(id, ['customer', 'bankAccount', 'warranties', 'warranties.photos'], errorMessage);
    }
    async findByCustomer(customerId, limit) {
        await this.customerService.findById(customerId, 'The customer does not exist');
        let query = this.creditRepository
            .createQueryBuilder('credit')
            .where('credit.customerId = :customerId', { customerId })
            .orderBy('credit.createdAt', 'DESC');
        if (limit)
            query = query.take(limit);
        return query.getMany();
    }
    async create(dto, creditStatus = credit_constant_1.CREDIT_STATUS.PENDING) {
        await this.customerService.findById(dto.customerId, 'The customer does not exist');
        await this.bankAccountService.findById(dto.bankAccountId, 'The bank Account does not exist');
        if (dto.originalAmount >= 300 && dto.originalAmount <= 999) {
            dto.percentageServiceFee = config_1.CONFIG.PERCENTAGE_SERVICE_FEE.MAX;
            dto.percentageInterest = config_1.CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.PERCENTAGE;
            dto.quantityFee = config_1.CONFIG.PERCENTAGE_INTEREST.SIX_WEEKS.QUANTITY;
        }
        else {
            dto.percentageServiceFee = config_1.CONFIG.PERCENTAGE_SERVICE_FEE.MIN;
            dto.percentageInterest =
                config_1.CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.PERCENTAGE;
            dto.quantityFee = config_1.CONFIG.PERCENTAGE_INTEREST.EIGHT_WEEKS.QUANTITY;
            dto.deliveryAmount = 0;
        }
        const serviceFee = (dto.originalAmount * dto.percentageServiceFee) / 100;
        const interest = (dto.originalAmount * dto.percentageInterest) / 100;
        dto.totalAmount = dto.originalAmount + serviceFee + interest;
        try {
            return await this.creditRepository.manager.transaction(async (manager) => {
                dto.status = creditStatus;
                if (dto.id) {
                    await manager.save(credit_entity_1.Credit, {
                        id: dto.id,
                        status: credit_constant_1.CREDIT_STATUS.LOST,
                    });
                    await manager.save(credit_status_entity_1.CreditStatus, {
                        status: credit_constant_1.CREDIT_STATUS.LOST,
                        creditId: dto.id,
                    });
                    delete dto.id;
                }
                const credit = await manager.save(credit_entity_1.Credit, dto);
                await manager.save(credit_status_entity_1.CreditStatus, {
                    status: creditStatus,
                    creditId: credit.id,
                });
                for (let i = 0; i < dto.warranties.length; i++) {
                    const item = dto.warranties[i];
                    const warranty = await manager.save(warranty_entity_1.Warranty, Object.assign(Object.assign({}, item), { creditId: credit.id }));
                    await manager.save(warranty_photo_entity_1.WarrantyPhoto, item.photosUrl.map((photoUrl) => ({
                        photoUrl,
                        warrantyId: warranty.id,
                    })));
                }
                return credit;
            });
        }
        catch (error) {
            throw new common_1.BadRequestException(message_exception_1.MessageException.GENERAL);
        }
    }
    async offer(_a) {
        var { id } = _a, dto = __rest(_a, ["id"]);
        const credit = await this.findById(id, 'The credit does not exist');
        if (credit.status == credit_constant_1.CREDIT_STATUS.LOST ||
            credit.status == credit_constant_1.CREDIT_STATUS.REJECTED ||
            credit.status == credit_constant_1.CREDIT_STATUS.EXPIRED ||
            credit.status == credit_constant_1.CREDIT_STATUS.CANCELLED)
            throw new common_1.BadRequestException('The credit cannot be offered');
        delete credit.customer;
        delete credit.bankAccount;
        delete credit.createdAt;
        delete credit.updatedAt;
        const body = Object.assign(Object.assign(Object.assign({}, credit), dto), { warranties: dto.warranties.map((warrantyDto) => {
                const warrantyRes = credit.warranties.find((item) => item.id == warrantyDto.id);
                if (!warrantyRes)
                    throw new common_1.BadRequestException(`The warrantyId: ${warrantyDto.id} does not exist`);
                const { photos } = warrantyRes, warranty = __rest(warrantyRes, ["photos"]);
                delete warranty.id;
                delete warranty.creditId;
                delete warranty.createdAt;
                delete warranty.updatedAt;
                return Object.assign(Object.assign({}, warranty), { value: warrantyDto.value, photosUrl: photos.map((photo) => photo.photoUrl) });
            }) });
        body.creditPreviousId = id;
        const data = await this.create(body, credit_constant_1.CREDIT_STATUS.OFFERED);
        return data;
    }
    async changeStatus(id, dto) {
        const data = await this.findById(id);
        const message = `Can't change state ${data.status} to ${dto.status}`;
        if (data.status == credit_constant_1.CREDIT_STATUS.PENDING &&
            dto.status != credit_constant_1.CREDIT_STATUS.CANCELLED &&
            dto.status != credit_constant_1.CREDIT_STATUS.REJECTED &&
            dto.status != credit_constant_1.CREDIT_STATUS.ACCEPTED)
            throw new common_1.BadRequestException(message);
        if (data.status == credit_constant_1.CREDIT_STATUS.PREAPPROVED &&
            dto.status != credit_constant_1.CREDIT_STATUS.APPROVED &&
            dto.status != credit_constant_1.CREDIT_STATUS.CANCELLED)
            throw new common_1.BadRequestException(message);
        if (data.status == credit_constant_1.CREDIT_STATUS.APPROVED &&
            dto.status != credit_constant_1.CREDIT_STATUS.EXPIRED &&
            dto.status != credit_constant_1.CREDIT_STATUS.CANCELLED)
            throw new common_1.BadRequestException(message);
        if (data.status == credit_constant_1.CREDIT_STATUS.OFFERED &&
            dto.status != credit_constant_1.CREDIT_STATUS.REJECTED &&
            dto.status != credit_constant_1.CREDIT_STATUS.CANCELLED &&
            dto.status != credit_constant_1.CREDIT_STATUS.PREAPPROVED)
            throw new common_1.BadRequestException(message);
        if (data.status == credit_constant_1.CREDIT_STATUS.CANCELLED ||
            data.status == credit_constant_1.CREDIT_STATUS.REJECTED ||
            data.status == credit_constant_1.CREDIT_STATUS.EXPIRED)
            throw new common_1.BadRequestException(message);
        return this.creditRepository.manager.transaction(async (manager) => {
            const dataToSave = [
                manager.save(credit_status_entity_1.CreditStatus, {
                    status: dto.status,
                    creditId: id,
                }),
                manager.save(credit_entity_1.Credit, Object.assign({ id }, dto)),
            ];
            if (dto.status === credit_constant_1.CREDIT_STATUS.APPROVED)
                dataToSave.push(this.createFees(data, manager));
            const res = await Promise.all(dataToSave);
            return res[1];
        });
    }
    createFees(credit, manager) {
        const creditFees = [];
        const amount = credit.totalAmount / credit.quantityFee;
        let today = new Date();
        const offsetDay = credit.plan == credit_constant_1.PLAN.WEEKLY ? 7 : 30;
        for (let index = 1; index <= credit.quantityFee; index++) {
            today = new Date(today);
            today.setDate(today.getDate() + offsetDay);
            console.log(index, today);
            creditFees.push({
                creditId: credit.id,
                amount,
                paymentDate: today,
            });
        }
        return manager.save(credit_fee_entity_1.CreditFee, creditFees);
    }
};
CreditService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [credit_repository_1.CreditRepository,
        customer_service_1.CustomerService,
        bank_account_service_1.BankAccountService])
], CreditService);
exports.CreditService = CreditService;
//# sourceMappingURL=credit.service.js.map