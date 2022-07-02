"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFeeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_fee_dto_1 = require("./create-fee.dto");
class UpdateFeeDto extends (0, swagger_1.PartialType)((0, swagger_1.OmitType)(create_fee_dto_1.CreateFeeDto, ['creditId'])) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateFeeDto = UpdateFeeDto;
//# sourceMappingURL=update-fee.dto.js.map