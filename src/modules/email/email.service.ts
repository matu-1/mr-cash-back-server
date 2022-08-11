import { Injectable } from '@nestjs/common';
import { preaprovedTemplate } from './utils/preapproved_email';
import { EmailDto } from './dtos/email.dto';
import { CREDIT_STATUS } from '../credit/credit.constant';
import { newCreditTemplate } from './utils/new_credit_email';
import { MailerService } from '@nestjs-modules/mailer';
import { waitingTemplate } from './utils/waiting_email';
import { aprovedTemplate } from './utils/approved_email';
import { disbursementTemplate } from './utils/disbursement_email';

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
      case CREDIT_STATUS.WAITING:
        subject = 'Tu credito está en espera';
        html = waitingTemplate(dto);
        break;
      case CREDIT_STATUS.APPROVED:
        subject = 'Tu credito está aprobado';
        html = aprovedTemplate(dto);
        break;
      case CREDIT_STATUS.DISBURSED:
        subject = 'Tu credito ha sido desembolsado';
        html = disbursementTemplate(dto);
        break;
    }
    try {
      const res = await this.mailerService.sendMail({
        to: dto.email,
        from: process.env.FROM_EMAIL,
        subject: subject,
        text: 'Mr Cash Back',
        html: html,
        bcc: ['jpsalinas@motoclickapp.com'],
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
