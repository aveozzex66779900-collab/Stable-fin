"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQrPayment = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const createQrPayment = async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({
                success: false,
                message: "Amount is required"
            });
        }
        // Dummy payment payload (MVP)
        const paymentPayload = `PAYMENT|AMOUNT:${amount}|REF:${Date.now()}`;
        const qrCode = await qrcode_1.default.toDataURL(paymentPayload);
        return res.status(200).json({
            success: true,
            message: "QR generated successfully",
            qrCode,
            amount
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "QR Pay failed"
        });
    }
};
exports.createQrPayment = createQrPayment;
