"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const common_1 = require("@nestjs/common");
exports.User = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    return data ? user === null || user === void 0 ? void 0 : user[data] : user;
});
//# sourceMappingURL=user.decorator.js.map