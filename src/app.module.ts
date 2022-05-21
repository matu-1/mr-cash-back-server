import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CityModule } from './modules/city/city.module';
import { BankAccountModule } from './modules/bank-account/bank-account.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, CityModule, BankAccountModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
