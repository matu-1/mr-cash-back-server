"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user1652928964197 = void 0;
class user1652928964197 {
    constructor() {
        this.name = 'user1652928964197';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(80) NOT NULL, \`email\` varchar(80) NOT NULL, \`password\` varchar(150) NOT NULL, \`role\` varchar(80) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.user1652928964197 = user1652928964197;
//# sourceMappingURL=1652928964197-user.js.map