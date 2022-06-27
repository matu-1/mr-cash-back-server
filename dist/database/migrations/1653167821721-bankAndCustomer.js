"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankAndCustomer1653167821721 = void 0;
class bankAndCustomer1653167821721 {
    constructor() {
        this.name = 'bankAndCustomer1653167821721';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`customer\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, \`phone\` varchar(10) NOT NULL, \`status\` varchar(50) NOT NULL, \`referredCode\` varchar(100) NOT NULL, \`profilePhotoUrl\` varchar(100) NOT NULL, \`identityFrontUrl\` varchar(100) NOT NULL, \`identityBackUrl\` varchar(100) NOT NULL, \`city_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bank_account\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`holder\` varchar(100) NOT NULL, \`accountNumber\` varchar(80) NOT NULL, \`bankName\` varchar(80) NOT NULL, \`identityCard\` varchar(80) NOT NULL, \`phoneNumber\` varchar(10) NOT NULL, \`customer_id\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD CONSTRAINT \`FK_a96886637b03c7710a4fb0195cf\` FOREIGN KEY (\`city_id\`) REFERENCES \`city\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD CONSTRAINT \`FK_f91d02e5e32a582bb4b26475b6a\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP FOREIGN KEY \`FK_f91d02e5e32a582bb4b26475b6a\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP FOREIGN KEY \`FK_a96886637b03c7710a4fb0195cf\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`bank_account\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
    }
}
exports.bankAndCustomer1653167821721 = bankAndCustomer1653167821721;
//# sourceMappingURL=1653167821721-bankAndCustomer.js.map