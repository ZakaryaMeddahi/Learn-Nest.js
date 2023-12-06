import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Starting Point
async function bootstrap() {
  // Create A New Instance Of Nest JS Application
  const app = await NestFactory.create(AppModule);
  // Start Listening On Port 3000
  await app.listen(3000);
}
bootstrap();
