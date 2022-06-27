"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicSelect = void 0;
const magicSelect = (select) => {
    const selected = [];
    Object.keys(select).forEach((key) => {
        if (select[key])
            selected.push(...select[key].map((attribute) => `${key}.${attribute}`));
        else
            selected.push(key);
    });
    return selected;
};
exports.magicSelect = magicSelect;
//# sourceMappingURL=magic-select.js.map