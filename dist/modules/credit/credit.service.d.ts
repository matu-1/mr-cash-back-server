import { CrudService } from '../../utils/crud.service';
import { Credit } from './credit.entity';
import { CreateCreditDto } from './dtos/create-credit.dto';
import { CreditRepository } from './credit.repository';
import { CustomerService } from '../customer/customer.service';
import { BankAccountService } from '../bank-account/bank-account.service';
import { UpdateCreditStatusDto } from './dtos/update-credit-status.dto';
import { OfferCreditDto } from './dtos/offer-credit.dto';
import { CreditFee } from '../credit-fee/credit-fee.entity';
import { EntityManager } from 'typeorm';
import { CreateCreditFee } from '../credit-fee/interfaces/credit-fee.interface';
export declare class CreditService extends CrudService<Credit, CreateCreditDto> {
    private creditRepository;
    private customerService;
    private bankAccountService;
    constructor(creditRepository: CreditRepository, customerService: CustomerService, bankAccountService: BankAccountService);
    findAllByRange(start: Date, end: Date): Promise<Credit[]>;
    findById(id: string, errorMessage?: string): Promise<Credit>;
    findByCustomer(customerId: string, limit?: number): Promise<Credit[]>;
    create(dto: CreateCreditDto, creditStatus?: number): Promise<CreateCreditDto & Credit>;
    offer({ id, ...dto }: OfferCreditDto): Promise<CreateCreditDto & Credit>;
    changeStatus(id: string, dto: UpdateCreditStatusDto): Promise<any>;
    createFees(credit: Credit, manager: EntityManager): Promise<(CreateCreditFee & CreditFee)[]>;
    calculateCredit(dto: CreateCreditDto): CreateCreditDto;
    getQualityIndicators(): Promise<any>;
    getQualityIndicatorsAnnual(): Promise<{
        averageAmount: any;
        activedCustomer: any;
        quantityCredit: any;
        registeredCustomer: any;
        originalAmount: any;
    }>;
    getTotalByStatus(): Promise<{
        active: number;
        expired: number;
        canceled: number;
        complete: number;
    }>;
}
