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
exports.city1653094652196 = void 0;
class city1653094652196 {
    constructor() {
        this.name = 'city1653094652196';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE \`city\` (\`id\` varchar(36) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE \`user\` CHANGE \`deleted_at\` \`deleted_at\` datetime(6) NULL DEFAULT 'NULL'`);
            yield queryRunner.query(`DROP TABLE \`city\``);
        });
    }
}
exports.city1653094652196 = city1653094652196;
//# sourceMappingURL=1653094652196-city.js.map