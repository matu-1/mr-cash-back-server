import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CityModule } from './modules/city/city.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
