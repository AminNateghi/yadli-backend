import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as ver from '../package.json';
import { AppModule } from './app.module';

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      preflightContinue: false,
    },
  });

  // swagger config
  const config = new DocumentBuilder()
    .setTitle('Yadli API')
    .setDescription('The Yadli project API description')
    .setVersion(ver.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
