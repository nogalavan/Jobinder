import { NestFactory } from '@nestjs/core';
import AppModule from './api/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(9000);
}
bootstrap();