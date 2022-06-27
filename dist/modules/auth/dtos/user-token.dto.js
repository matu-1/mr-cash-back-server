"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTokenDto = void 0;
const openapi = require("@nestjs/swagger");
class UserTokenDto {
    constructor() {
        this.id = '';
        this.name = '';
        this.email = '';
        this.role = '';
        this.accessToken = '';
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object, default: '' }, name: { required: true, type: () => Object, default: '' }, email: { required: true, type: () => Object, default: '' }, role: { required: true, type: () => Object, default: '' }, accessToken: { required: true, type: () => Object, default: '' } };
    }
}
exports.UserTokenDto = UserTokenDto;
//# sourceMappingURL=user-token.dto.js.map