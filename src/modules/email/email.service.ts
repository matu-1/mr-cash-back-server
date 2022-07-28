import { Injectable } from '@nestjs/common';
import { preaprovedTemplate } from './utils/preapproved_email';
import { EmailDto } from './dtos/email.dto';
import { CREDIT_STATUS } from '../credit/credit.constant';
import { newCreditTemplate } from './utils/new_credit_email';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(dto: EmailDto) {
    let subject = 'Mr Cash Back';
    let html = `<b>Mr Cash Back</b>`;
    switch (dto.status) {
      case CREDIT_STATUS.PENDING:
        subject = 'Nuevo credito Mr Cash Back';
        html = newCreditTemplate(dto);
        break;
      case CREDIT_STATUS.PREAPPROVED:
        subject = 'Tu credito ha sido pre aprobado';
        html = preaprovedTemplate(dto);
        break;
    }

    const res = await this.mailerService.sendMail({
      to: dto.email,
      from: process.env.FROM_EMAIL,
      subject: subject,
      text: 'Mr Cash Back',
      html: html,
    });

    console.log(res);
  }
}
