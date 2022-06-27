"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_notification_dto_1 = require("./create-notification.dto");
class UpdateNotificationDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_notification_dto_1.CreateNotificationDto, ['customerId'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateNotificationDto = UpdateNotificationDto;
//# sourceMappingURL=update-notification.dto.js.map