import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  Logger.log('Server started', 'Application Boostrap', true);
}
bootstrap();
