import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Mr. Cash Back Api')
  .setDescription('Documentation for managing the Api...')
  .setVersion('1.0')
  .addSecurity('bearer', {
    type: 'http',
    scheme: 'Bearer',
    description: 'Please enter the Token',
  })
  .addSecurityRequirements('bearer')
  .build();
