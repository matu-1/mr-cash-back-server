"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWarrantyDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_warranty_dto_1 = require("./create-warranty.dto");
class UpdateWarrantyDto extends (0, swagger_1.PartialType)(create_warranty_dto_1.CreateWarrantyDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateWarrantyDto = UpdateWarrantyDto;
//# sourceMappingURL=update-warranty.dto.js.map