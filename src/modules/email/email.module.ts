import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { SendGridModule } from '@anchan828/nest-sendgrid';

@Module({
  imports:[
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController]
})
export class EmailModule {}
