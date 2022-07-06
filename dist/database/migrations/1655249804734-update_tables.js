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
exports.updateTables1655249804734 = void 0;
class updateTables1655249804734 {
    constructor() {
        this.name = 'updateTables1655249804734';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`referredCode\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profilePhotoUrl\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identityFrontUrl\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identityBackUrl\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`otp\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`accountNumber\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`bankName\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`identityCard\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`phoneNumber\``);
            yield queryRunner.query(`ALTER TABLE \`warranty\` DROP COLUMN \`model\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`email\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`birthday\` date NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`referred_code\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`profile_photo_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_front_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_back_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_number\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`bank_name\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`identity_number\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_type\` varchar(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` ADD \`status\` varchar(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
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
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` DROP COLUMN \`status\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_type\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`identity_number\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`bank_name\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_number\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_back_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_front_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profile_photo_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`referred_code\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`birthday\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`email\``);
            yield queryRunner.query(`ALTER TABLE \`warranty\` ADD \`model\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`phoneNumber\` varchar(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`identityCard\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`bankName\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`accountNumber\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`otp\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identityBackUrl\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identityFrontUrl\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`profilePhotoUrl\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`referredCode\` varchar(100) NOT NULL`);
        });
    }
}
exports.updateTables1655249804734 = updateTables1655249804734;
//# sourceMappingURL=1655249804734-update_tables.js.map