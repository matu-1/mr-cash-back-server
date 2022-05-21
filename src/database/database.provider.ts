import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnviromentVariables } from '../utils/enviroment-variables';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    useFactory: (configService: ConfigService<EnviromentVariables>) => ({
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
    inject: [ConfigService],
  }),
];
