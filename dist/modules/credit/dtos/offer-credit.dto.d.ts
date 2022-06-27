import { CreateCreditDto } from './create-credit.dto';
import { OfferWarranty } from './offer-warranty.dto';
declare const OfferCreditDto_base: import("@nestjs/common").Type<Omit<CreateCreditDto, "customerId" | "plan" | "bankAccountId" | "warranties">>;
export declare class OfferCreditDto extends OfferCreditDto_base {
    id: string;
    warranties: OfferWarranty[];
}
export {};
