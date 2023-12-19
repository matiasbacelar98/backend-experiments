import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as SendGrid from '@sendgrid/mail';

SendGrid.setApiKey(process.env.SENDGRID_API_KEY || '');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
