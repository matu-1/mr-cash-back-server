"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const common_1 = require("@nestjs/common");
class ValidationException extends common_1.HttpException {
    constructor(errors) {
        super({
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: 'Invalid Fields',
            errors: ValidationException.buildError(errors, {}),
        }, common_1.HttpStatus.BAD_REQUEST);
        this.errors = errors;
    }
    static buildError(errorsArray, errors) {
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
exports.ValidationException = ValidationException;
//# sourceMappingURL=validation.exception.js.map