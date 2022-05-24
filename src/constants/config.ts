export const CONFIG = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  JWT_MOBILE_EXPIRTES_IN: process.env.JWT_MOBILE_EXPIRTES_IN || '365 days',
  ROLE: {
    ADMIN: 'admin',
    OPERATOR: 'operator',
  },
  STATUS: {
    ENABLED: 0,
    DISABLED: 1,
  },
  PERCENTAGE_SERVICE_FEE: {
    //Tasa Servicio
    MAX: 20, //300-999
    MIN: 15, //1000-2000
  },
  PERCENTAGE_INTEREST: {
    //Interes
    SIX_WEEKS: {
      //6 semanas
      PERCENTAGE: 4.5,
      QUANTITY: 6,
    },
    EIGHT_WEEKS: {
      //8 semanas
      PERCENTAGE: 6,
      QUANTITY: 8,
    },
  },
};
