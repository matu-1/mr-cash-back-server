"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationPipe = void 0;
const common_1 = require("@nestjs/common");
const validation_exception_1 = require("./validation.exception");
exports.validationPipe = new common_1.ValidationPipe({
    whitelist: true,
    exceptionFactory: (errors) => new validation_exception_1.ValidationException(errors),
});
//# sourceMappingURL=validation-pipe.js.map