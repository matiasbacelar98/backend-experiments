import { Injectable } from '@nestjs/common';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class EmailService {
  async sendEmails(emails: string[], name: string) {
    try {
      const msg = {
        to: emails,
        from: process.env.SENDGRID_MAIL_FROM || '',
        subject: 'Email subject',
        templateId: process.env.SENDGRID_TEMPLATE_ID || '',
        dynamicTemplateData: { name: name },
      };

      return SendGrid.sendMultiple(msg);
    } catch (error) {
      if (error.response) {
        console.error(error.response.body);
      }
    }
  }
}
