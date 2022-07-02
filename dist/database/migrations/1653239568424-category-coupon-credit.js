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
exports.categoryCouponCredit1653239568424 = void 0;
class categoryCouponCredit1653239568424 {
    constructor() {
        this.name = 'categoryCouponCredit1653239568424';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`credit\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`original_amount\` decimal(16,2) NOT NULL, \`total_amount\` decimal(16,2) NULL, \`balance\` decimal(16,2) NOT NULL DEFAULT '0.00', \`quantity_fee\` tinyint NOT NULL, \`plan\` tinyint NOT NULL, \`status\` tinyint NOT NULL DEFAULT '0', \`delivery_amount\` decimal(16,2) NULL, \`percentage_service_fee\` tinyint NOT NULL, \`percentage_interest\` tinyint NOT NULL, \`customer_id\` varchar(255) NOT NULL, \`bank_account_id\` varchar(255) NOT NULL, \`credit_previous_id\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`CREATE TABLE \`category\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`type\` varchar(80) NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_3f0d89f4ae3d7c65cace7f7c887\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_25a0935746842b8e352078c82b2\` FOREIGN KEY (\`bank_account_id\`) REFERENCES \`bank_account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_25a0935746842b8e352078c82b2\``);
            yield queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_3f0d89f4ae3d7c65cace7f7c887\``);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`DROP TABLE \`category\``);
            yield queryRunner.query(`DROP TABLE \`credit\``);
        });
    }
}
exports.categoryCouponCredit1653239568424 = categoryCouponCredit1653239568424;
//# sourceMappingURL=1653239568424-category-coupon-credit.js.map