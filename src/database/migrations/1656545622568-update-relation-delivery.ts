import {MigrationInterface, QueryRunner} from "typeorm";

export class updateRelationDelivery1656545622568 implements MigrationInterface {
    name = 'updateRelationDelivery1656545622568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`profile_photo_url\` \`profile_photo_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_front_url\` \`identity_front_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_back_url\` \`identity_back_url\` varchar(300) NULL`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`token_notification\` \`token_notification\` varchar(250) NULL`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`delivery\` DROP FOREIGN KEY \`FK_bb2e15e8840a3e21588b4065899\``);
        await queryRunner.query(`ALTER TABLE \`delivery\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`delivery\` ADD UNIQUE INDEX \`IDX_bb2e15e8840a3e21588b406589\` (\`credit_id\`)`);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_bb2e15e8840a3e21588b406589\` ON \`delivery\` (\`credit_id\`)`);
        await queryRunner.query(`ALTER TABLE \`delivery\` ADD CONSTRAINT \`FK_bb2e15e8840a3e21588b4065899\` FOREIGN KEY (\`credit_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`credit_fee\` DROP FOREIGN KEY \`FK_b9754b217840d1f379a809ef6b6\``);
        await queryRunner.query(`ALTER TABLE \`credit\` DROP FOREIGN KEY \`FK_32ca4bcf9c4b751dca420dd58fd\``);
        await queryRunner.query(`ALTER TABLE \`delivery\` DROP FOREIGN KEY \`FK_bb2e15e8840a3e21588b4065899\``);
        await queryRunner.query(`DROP INDEX \`REL_bb2e15e8840a3e21588b406589\` ON \`delivery\``);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`notification\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_status\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`coupon_id\` \`coupon_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`paid_at\` \`paid_at\` datetime NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`payment_method\` \`payment_method\` tinyint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`amount_paid\` \`amount_paid\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit_fee\` ADD CONSTRAINT \`FK_b9754b217840d1f379a809ef6b6\` FOREIGN KEY (\`coupon_id\`) REFERENCES \`coupon\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`coupon\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`credit_previous_id\` \`credit_previous_id\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_signature\` \`url_signature\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`url_contract\` \`url_contract\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`delivery_amount\` \`delivery_amount\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`credit\` ADD CONSTRAINT \`FK_32ca4bcf9c4b751dca420dd58fd\` FOREIGN KEY (\`credit_previous_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`delivery\` DROP INDEX \`IDX_bb2e15e8840a3e21588b406589\``);
        await queryRunner.query(`ALTER TABLE \`delivery\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`delivery\` ADD CONSTRAINT \`FK_bb2e15e8840a3e21588b4065899\` FOREIGN KEY (\`credit_id\`) REFERENCES \`credit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`value\` \`value\` decimal(16,2) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`warranty_photo\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`bank_account\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`token_notification\` \`token_notification\` varchar(250) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_back_url\` \`identity_back_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`identity_front_url\` \`identity_front_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`profile_photo_url\` \`profile_photo_url\` varchar(300) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`customer\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`city\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`category\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
    }

}
