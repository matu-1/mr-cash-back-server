"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.city1653094652196 = void 0;
class city1653094652196 {
    constructor() {
        this.name = 'city1653094652196';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`city\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`city\``);
    }
}
exports.city1653094652196 = city1653094652196;
//# sourceMappingURL=1653094652196-city.js.map