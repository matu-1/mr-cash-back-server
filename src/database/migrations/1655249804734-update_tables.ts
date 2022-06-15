import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTables1655249804734 implements MigrationInterface {
    name = 'updateTables1655249804734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`referredCode\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profilePhotoUrl\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identityFrontUrl\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identityBackUrl\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`otp\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`accountNumber\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`bankName\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`identityCard\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`phoneNumber\``);
        await queryRunner.query(`ALTER TABLE \`warranty\` DROP COLUMN \`model\``);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`email\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`birthday\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`referred_code\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`profile_photo_url\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_front_url\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`identity_back_url\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_number\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`bank_name\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`identity_number\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`account_type\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` ADD \`status\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` DROP COLUMN \`status\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_type\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`identity_number\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`bank_name\``);
        await queryRunner.query(`ALTER TABLE \`bank_account\` DROP COLUMN \`account_number\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_back_url\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`identity_front_url\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`profile_photo_url\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`referred_code\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`birthday\``);
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`warranty\` ADD \`model\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`phoneNumber\` varchar(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`identityCard\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`bankName\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` ADD \`accountNumber\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`otp\` varchar(80) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`identityBackUrl\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`identityFrontUrl\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`profilePhotoUrl\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`referredCode\` varchar(100) NOT NULL`);
    }

}
