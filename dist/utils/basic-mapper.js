"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicMapper = void 0;
class BasicMapper {
    static map(source, target) {
        Object.keys(target).forEach((key) => {
            target[key] = source[key];
        });
        return target;
    }
}
exports.BasicMapper = BasicMapper;
//# sourceMappingURL=basic-mapper.js.map