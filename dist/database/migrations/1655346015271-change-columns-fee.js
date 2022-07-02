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
exports.changeColumnsFee1655346015271 = void 0;
class changeColumnsFee1655346015271 {
    constructor() {
        this.name = 'changeColumnsFee1655346015271';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`read\` \`read\` tinyint NOT NULL DEFAULT '0'`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`read\` \`read\` tinyint NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        });
    }
}
exports.changeColumnsFee1655346015271 = changeColumnsFee1655346015271;
//# sourceMappingURL=1655346015271-change-columns-fee.js.map