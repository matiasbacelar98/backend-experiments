import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  sendEmails(@Body('emails') emails: string[], @Body('name') name: string) {
    return this.emailService.sendEmails(emails, name);
  }
}
