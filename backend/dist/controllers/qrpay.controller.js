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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQrPayment = void 0;
const qrcode_1 = __importDefault(require("qrcode"));
const createQrPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const qrCode = yield qrcode_1.default.toDataURL(paymentPayload);
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
});
exports.createQrPayment = createQrPayment;
