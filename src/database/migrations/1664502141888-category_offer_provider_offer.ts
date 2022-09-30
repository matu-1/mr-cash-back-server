import {MigrationInterface, QueryRunner} from "typeorm";

export class categoryOfferProviderOffer1664502141888 implements MigrationInterface {
    name = 'categoryOfferProviderOffer1664502141888'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`category_offer\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(80) NOT NULL, \`description\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`offer\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`total_amount\` decimal(16,2) NOT NULL, \`delivery_amount\` decimal(16,2) NULL, \`url_contract\` varchar(255) NULL, \`url_signature\` varchar(255) NULL, \`disburse_at\` datetime NULL, \`status\` tinyint NOT NULL DEFAULT '0', \`customer_id\` varchar(255) NOT NULL, \`bank_account_id\` varchar(255) NOT NULL, \`offer_previous_id\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`provider\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(60) NOT NULL, \`percentage_commission\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`banner\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`banner\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`profile_photo_url\` \`profile_photo_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_front_url\` \`identity_front_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_back_url\` \`identity_back_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`token_notification\` \`token_notification\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`config\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`delivery\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`disburse_at\` \`disburse_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`approved_photo_url\` \`approved_photo_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`disbursement_photo_url\` \`disbursement_photo_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`photo_url\` \`photo_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` DROP FOREIGN KEY \`FK_bbc92090351908362924192ff55\``);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`reason\` \`reason\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`user_id\` \`user_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` ADD CONSTRAINT \`FK_bbc92090351908362924192ff55\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD CONSTRAINT \`FK_2e7aef504dffda4f19956c6363a\` FOREIGN KEY (\`customer_id\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD CONSTRAINT \`FK_a3f3342ef253be93c45fbc5e4b3\` FOREIGN KEY (\`bank_account_id\`) REFERENCES \`bank_account\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`offer\` ADD CONSTRAINT \`FK_e499193a931b9e53c03676d4d9a\` FOREIGN KEY (\`offer_previous_id\`) REFERENCES \`offer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`offer\` DROP FOREIGN KEY \`FK_e499193a931b9e53c03676d4d9a\``);
        await queryRunner.query(`ALTER TABLE \`offer\` DROP FOREIGN KEY \`FK_a3f3342ef253be93c45fbc5e4b3\``);
        await queryRunner.query(`ALTER TABLE \`offer\` DROP FOREIGN KEY \`FK_2e7aef504dffda4f19956c6363a\``);
        await queryRunner.query(`ALTER TABLE \`credit_status\` DROP FOREIGN KEY \`FK_bbc92090351908362924192ff55\``);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`user_id\` \`user_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`reason\` \`reason\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` ADD CONSTRAINT \`FK_bbc92090351908362924192ff55\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`photo_url\` \`photo_url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`disbursement_photo_url\` \`disbursement_photo_url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`approved_photo_url\` \`approved_photo_url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`disburse_at\` \`disburse_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`delivery\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`config\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`token_notification\` \`token_notification\` varchar(250) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_back_url\` \`identity_back_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_front_url\` \`identity_front_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`profile_photo_url\` \`profile_photo_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`banner\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`banner\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`provider\``);
        await queryRunner.query(`DROP TABLE \`offer\``);
        await queryRunner.query(`DROP TABLE \`category_offer\``);
    }

}
