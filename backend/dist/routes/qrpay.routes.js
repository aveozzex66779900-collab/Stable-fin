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
const express_1 = require("express");
const qrcode_1 = __importDefault(require("qrcode"));
const router = (0, express_1.Router)();
router.post("/generate", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        if (!amount) {
            return res.status(400).json({ message: "Amount required" });
        }
        const qrData = `upi://pay?pa=test@upi&am=${amount}&cu=INR`;
        const qrCode = yield qrcode_1.default.toDataURL(qrData);
        return res.status(200).json({
            success: true,
            qrCode,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "QR generation failed" });
    }
}));
exports.default = router;
