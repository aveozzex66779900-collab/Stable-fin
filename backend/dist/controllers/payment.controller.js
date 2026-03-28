"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPayment = void 0;
const confirmPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({
                success: false,
                message: "Amount missing",
            });
        }
        // simulate real payment processing
        yield new Promise((resolve) => setTimeout(resolve, 800));
        return res.status(200).json({
            success: true,
            message: "Payment successful",
            transactionId: "TXN_" + Date.now(),
            amount,
            mode: "QR_DEMO",
        });
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Payment failed",
        });
    }
});
exports.confirmPayment = confirmPayment;
