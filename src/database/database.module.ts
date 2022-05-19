import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { enviroments } from 'src/utils/enviroment';
import { databaseProviders } from './database.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    ...databaseProviders,
  ],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
