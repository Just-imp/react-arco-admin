import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { generateDocment } from './doc';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add data validate
  app.useGlobalPipes(new ValidationPipe())

  // create doc
  generateDocment(app)

  await app.listen(3000);
}
bootstrap();
