import {MigrationInterface, QueryRunner} from "typeorm";

export class changeColumnsFee1655346015271 implements MigrationInterface {
    name = 'changeColumnsFee1655346015271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`read\` \`read\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`read\` \`read\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
    }

}
