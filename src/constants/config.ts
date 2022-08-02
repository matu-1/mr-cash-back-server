export const CONFIG = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  JWT_MOBILE_EXPIRTES_IN: process.env.JWT_MOBILE_EXPIRTES_IN || '365 days',
  STATUS: {
    ENABLED: 0,
    DISABLED: 1,
  },
  PERCENTAGE_SERVICE_FEE: {
    //Tasa Servicio
    MAX: 20, //300-999
    MIN: 20, //1000-2000
  },
  PERCENTAGE_INTEREST: {
    EIGHT_WEEKS: {
      PERCENTAGE: 4.5,
      QUANTITY: 8,
    },
    TWELVE_WEEKS: {
      PERCENTAGE: 6,
      QUANTITY: 12,
    },
    TWO_MONTHS: {
      PERCENTAGE: 4.5,
      QUANTITY: 2,
    },
    THREE_MONTHS: {
      PERCENTAGE: 6,
      QUANTITY: 3,
    },
  },
  CREDIT: {
    MIN_AMOUNT: 300,
    MAX_AMOUNT: 2000,
  },
  DELIVERY_AMOUNT: 30,
  EXPRESS_DISBURSEMENT: 35,
  PERCENTAGE_STORAGE: 3,
};
