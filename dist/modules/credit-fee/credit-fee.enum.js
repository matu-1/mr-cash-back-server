"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentMethod = exports.FeeStatus = void 0;
var FeeStatus;
(function (FeeStatus) {
    FeeStatus[FeeStatus["Pending"] = 0] = "Pending";
    FeeStatus[FeeStatus["Paid"] = 1] = "Paid";
    FeeStatus[FeeStatus["ToCheck"] = 2] = "ToCheck";
})(FeeStatus = exports.FeeStatus || (exports.FeeStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod[PaymentMethod["Cash"] = 0] = "Cash";
    PaymentMethod[PaymentMethod["CreditCard"] = 1] = "CreditCard";
    PaymentMethod[PaymentMethod["Other"] = 2] = "Other";
})(PaymentMethod = exports.PaymentMethod || (exports.PaymentMethod = {}));
//# sourceMappingURL=credit-fee.enum.js.map