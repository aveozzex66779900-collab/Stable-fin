"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_routes_1 = __importDefault(require("./payment.routes"));
const qrpay_routes_1 = __importDefault(require("./qrpay.routes"));
const support_1 = __importDefault(require("./support"));
const affiliate_routes_1 = __importDefault(require("./affiliate.routes"));
const router = (0, express_1.Router)();
router.use("/payments", payment_routes_1.default);
router.use("/qrpay", qrpay_routes_1.default);
router.use("/tickets", support_1.default);
router.use("/affiliate", affiliate_routes_1.default);
exports.default = router;
