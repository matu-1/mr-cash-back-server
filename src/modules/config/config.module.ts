import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigController } from './config.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigRepository } from './config.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ConfigRepository])],
  providers: [ConfigService],
  controllers: [ConfigController],
})
export class ConfigModule {}
