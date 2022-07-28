import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        name: process.env.NAME_EMAIL,
        host: process.env.HOST_EMAIL,
        port: process.env.PORT_EMAIL,
        secure: false,
        auth: {
          user: process.env.FROM_EMAIL,
          pass: process.env.PASS_EMAIL,
        },
        tls: {
          rejectUnauthorized: false,
        },
        defaults: {
          from: `"Mr Cash Back" <${process.env.FROM_EMAIL}>`,
        },
      },
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
})
export class EmailModule {}
