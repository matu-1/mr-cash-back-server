import { ValidationPipe } from '@nestjs/common';
import { ValidationException } from './validation.exception';

export const validationPipe = new ValidationPipe({
  whitelist: true,
  exceptionFactory: (errors) => new ValidationException(errors),
});
