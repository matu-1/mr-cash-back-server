import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerConfig } from './utils/swagger.config';
import { ConfigService } from '@nestjs/config';
import { EnviromentVariables } from './utils/enviroment-variables';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService<EnviromentVariables> =
    app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.setGlobalPrefix('/api');
  app.enableCors();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);
  await app.listen(configService.get('PORT'));
}
bootstrap();
