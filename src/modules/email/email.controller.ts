import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { ApiTags } from '@nestjs/swagger';
import { EmailDto } from './dtos/email.dto';

@ApiTags('Email')
@Controller('email')
export class EmailController {
    constructor(private emailService: EmailService){}

    @Post()
    async sendEmail(@Body() dto: EmailDto): Promise<void> {
        await this.emailService.sendEmail(dto);
    }
}
