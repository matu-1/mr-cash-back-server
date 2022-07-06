export declare const CONFIG: {
    JWT_SECRET_KEY: string;
    JWT_EXPIRES_IN: string;
    JWT_MOBILE_EXPIRTES_IN: string;
    STATUS: {
        ENABLED: number;
        DISABLED: number;
    };
    PERCENTAGE_SERVICE_FEE: {
        MAX: number;
        MIN: number;
    };
    PERCENTAGE_INTEREST: {
        SIX_WEEKS: {
            PERCENTAGE: number;
            QUANTITY: number;
        };
        EIGHT_WEEKS: {
            PERCENTAGE: number;
            QUANTITY: number;
        };
    };
    CREDIT: {
        MIN_AMOUNT: number;
        MAX_AMOUNT: number;
    };
    DELIVERY_AMOUNT: number;
};
