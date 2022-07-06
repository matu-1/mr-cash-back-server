"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
class DateUtils {
    static getMinToday() {
        const today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return today;
    }
    static getMaxToday() {
        const today = new Date();
        today.setHours(23);
        today.setMinutes(59);
        today.setSeconds(59);
        today.setMilliseconds(999);
        return today;
    }
    static fromUTC(date) {
        const newDate = new Date(date);
        return new Date(Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate(), newDate.getHours(), newDate.getMinutes(), newDate.getSeconds(), newDate.getMilliseconds()));
    }
}
exports.DateUtils = DateUtils;
const nDate = new Date().toLocaleString('es-ES', {
    timeZone: 'UTC',
});
console.log('tz UTC:', nDate, new Date());
//# sourceMappingURL=date.js.map