import { MigrationInterface, QueryRunner } from "typeorm";
export declare class changeColumnsFee1655346015271 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
