"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
exports.CONFIG = {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
    JWT_MOBILE_EXPIRTES_IN: process.env.JWT_MOBILE_EXPIRTES_IN || '365 days',
    STATUS: {
        ENABLED: 0,
        DISABLED: 1,
    },
    PERCENTAGE_SERVICE_FEE: {
        MAX: 20,
        MIN: 20,
    },
    PERCENTAGE_INTEREST: {
        SIX_WEEKS: {
            PERCENTAGE: 4.5,
            QUANTITY: 6,
        },
        EIGHT_WEEKS: {
            PERCENTAGE: 6,
            QUANTITY: 8,
        },
    },
    CREDIT: {
        MIN_AMOUNT: 300,
        MAX_AMOUNT: 2000,
    },
    DELIVERY_AMOUNT: 30,
};
//# sourceMappingURL=config.js.map