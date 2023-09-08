import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import * as cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cors({
    origin: 'http://localhost:5173', // Reemplaza esto con tu origen específico
  }));
  await app.listen(3000);
}
bootstrap();
