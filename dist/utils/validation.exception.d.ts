import { HttpException } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export declare class ValidationException extends HttpException {
    errors: ValidationError[];
    constructor(errors: ValidationError[]);
    private static buildError;
}
