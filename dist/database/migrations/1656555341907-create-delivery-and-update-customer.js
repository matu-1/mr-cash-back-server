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
exports.createDeliveryAndUpdateCustomer1656555341907 = void 0;
class createDeliveryAndUpdateCustomer1656555341907 {
    constructor() {
        this.name = 'createDeliveryAndUpdateCustomer1656555341907';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`delivery\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`latitude\` double NOT NULL, \`longitude\` double NOT NULL, \`address\` varchar(100) NOT NULL, \`reference\` varchar(100) NOT NULL, \`amount\` decimal(16,2) NOT NULL DEFAULT '0.00', \`credit_id\` varchar(255) NOT NULL, UNIQUE INDEX \`REL_bb2e15e8840a3e21588b406589\` (\`credit_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`token_notification\` varchar(250) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`phone\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`phone\` varchar(12) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` tinyint NOT NULL DEFAULT '0'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profile_photo_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`profile_photo_url\` varchar(300) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_front_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_front_url\` varchar(300) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_back_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_back_url\` varchar(300) NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_type\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_type\` varchar(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` DROP COLUMN \`photo_url\``);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` ADD \`photo_url\` varchar(300) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`delivery\` ADD CONSTRAINT \`FK_bb2e15e8840a3e21588b4065899\` FOREIGN KEY (\`credit_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`delivery\` DROP FOREIGN KEY \`FK_bb2e15e8840a3e21588b4065899\``);
            yield queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` DROP COLUMN \`photo_url\``);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` ADD \`photo_url\` varchar(150) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_type\``);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_type\` varchar(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_back_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_back_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_front_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_front_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profile_photo_url\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`profile_photo_url\` varchar(100) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` varchar(40) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`phone\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`phone\` varchar(10) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`token_notification\``);
            yield queryRunner.query(`DROP INDEX \`REL_bb2e15e8840a3e21588b406589\` ON \`delivery\``);
            yield queryRunner.query(`DROP TABLE \`delivery\``);
        });
    }
}
exports.createDeliveryAndUpdateCustomer1656555341907 = createDeliveryAndUpdateCustomer1656555341907;
//# sourceMappingURL=1656555341907-create-delivery-and-update-customer.js.map