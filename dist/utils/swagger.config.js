"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
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
//# sourceMappingURL=swagger.config.js.map