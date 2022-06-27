"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coupon1653235086435 = void 0;
class coupon1653235086435 {
    constructor() {
        this.name = 'coupon1653235086435';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`coupon\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(150) NOT NULL, \`description\` text NULL, \`status\` tinyint NOT NULL DEFAULT '0', \`amount\` decimal(16,2) NOT NULL, \`customer_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`otp\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` varchar(40) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` ADD CONSTRAINT \`FK_488b6d2a93ad31b4cd5e1e01cfe\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`coupon\` DROP FOREIGN KEY \`FK_488b6d2a93ad31b4cd5e1e01cfe\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`status\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`otp\``);
        await queryRunner.query(`DROP TABLE \`coupon\``);
    }
}
exports.coupon1653235086435 = coupon1653235086435;
//# sourceMappingURL=1653235086435-coupon.js.map