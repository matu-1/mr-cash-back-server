import { Injectable } from '@nestjs/common';
import { SendGridService } from '@anchan828/nest-sendgrid';
import { preaprovedTemplate } from './utils/preapproved_email';
import { EmailDto } from './dtos/email.dto';

@Injectable()
export class EmailService {
    constructor(private readonly sendGrid: SendGridService){
        
    }

    async sendEmail(dto: EmailDto) {
        await this.sendGrid.send({
            to: dto.email,
            from: process.env.FROM_EMAIL,
            subject: "Tu credito ha sido pre aprobado",
            text: dto.creditId,
            html: preaprovedTemplate(dto),
        });
    }
}
