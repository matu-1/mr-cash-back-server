export const CONFIG = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || 'JWT_SECRET_KEY',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1h',
  JWT_MOBILE_EXPIRTES_IN: process.env.JWT_MOBILE_EXPIRTES_IN || '365 days',
  ROLE: {
    ADMIN: 'admin',
    OPERATOR: 'operator',
  },
};
