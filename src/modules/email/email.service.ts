import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { preaprovedTemplate } from './utils/preapproved_email';
import { EmailDto } from './dtos/email.dto';
import { CREDIT_STATUS } from '../credit/credit.constant';
import { newCreditTemplate } from './utils/new_credit_email';

@Injectable()
export class EmailService {
    constructor(private readonly sendGrid: SendGridService){
        
    }

    async sendEmail(dto: EmailDto) {
        let subject = "Mr Cash Back";
        let html = `<b>Mr Cash Back</b>`;
        switch (dto.status) {
            case CREDIT_STATUS.PENDING:
                subject = "Nuevo credito Mr Cash Back";
                html = newCreditTemplate(dto);
                break;
            case CREDIT_STATUS.PREAPPROVED:
                subject = "Tu credito ha sido pre aprobado";
                html = preaprovedTemplate(dto);
                break;
        }
        await this.sendGrid.send({
            to: dto.email,
            from: process.env.FROM_EMAIL,
            bcc: ["jpsalinas@motoclickapp.com", "angela@patio.com.bo"],
            subject: subject,
            text: dto.creditId,
            html: html,
        });
    }
}
