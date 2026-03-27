"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const qrcode_1 = __importDefault(require("qrcode"));
const router = (0, express_1.Router)();
router.post("/generate", async (req, res) => {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({ message: "Amount required" });
        }
        const qrData = `upi://pay?pa=test@upi&am=${amount}&cu=INR`;
        const qrCode = await qrcode_1.default.toDataURL(qrData);
        return res.status(200).json({
            success: true,
            qrCode,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "QR generation failed" });
    }
});
exports.default = router;
//# sourceMappingURL=qrpay.routes.js.map