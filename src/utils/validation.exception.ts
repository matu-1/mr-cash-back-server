import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationException extends HttpException {
  constructor(public errors: ValidationError[]) {
    super(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Invalid Fields',
        errors: ValidationException.buildError(errors, {}),
      },
      HttpStatus.BAD_REQUEST,
    );
  }

  //Recursivo xq en anidado
  private static buildError(errorsArray: ValidationError[], errors: any) {
    errorsArray.forEach((error) => {
      if (error.children.length == 0)
        errors[error.property] = Object.values(error.constraints);
      else {
        errors[error.property] = {};
        ValidationException.buildError(error.children, errors[error.property]);
      }
    });
    return errors;
  }
}
