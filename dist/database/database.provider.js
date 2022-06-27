"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
exports.databaseProviders = [
    typeorm_1.TypeOrmModule.forRootAsync({
        useFactory: (configService) => ({
            type: 'mysql',
            host: configService.get('DATABASE_HOST'),
            port: configService.get('DATABASE_PORT'),
            username: configService.get('DATABASE_USERNAME'),
            password: configService.get('DATABASE_PASSWORD'),
            database: configService.get('DATABASE_NAME'),
            entities: [`${__dirname}/../**/*.entity{.js,.ts}`],
            synchronize: false,
            migrations: [`${__dirname}/migrations/*{.ts,.js}`],
        }),
        inject: [config_1.ConfigService],
    }),
];
//# sourceMappingURL=database.provider.js.map