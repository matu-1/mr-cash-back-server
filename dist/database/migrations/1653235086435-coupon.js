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
exports.coupon1653235086435 = void 0;
class coupon1653235086435 {
    constructor() {
        this.name = 'coupon1653235086435';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`coupon\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(150) NOT NULL, \`description\` text NULL, \`status\` tinyint NOT NULL DEFAULT '0', \`amount\` decimal(16,2) NOT NULL, \`customer_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`otp\` varchar(80) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` varchar(40) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
            yield queryRunner.query(`ALTER TABLE \`coupon\` ADD CONSTRAINT \`FK_488b6d2a93ad31b4cd5e1e01cfe\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`coupon\` DROP FOREIGN KEY \`FK_488b6d2a93ad31b4cd5e1e01cfe\``);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
            yield queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` varchar(50) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`otp\``);
            yield queryRunner.query(`DROP TABLE \`coupon\``);
        });
    }
}
exports.coupon1653235086435 = coupon1653235086435;
//# sourceMappingURL=1653235086435-coupon.js.map