"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));
app.options("*", (0, cors_1.default)());
// ✅ HEALTH CHECK (REQUIRED)
app.get("/", (req, res) => {
    res.send("Backend Live ✅");
});
// ================= ROUTES =================
// Test
app.get("/test", (req, res) => {
    res.json({ success: true, message: "API working 💰" });
});
// QR
app.get("/qr", (req, res) => {
    res.json({ qr: "QR_CODE_DATA" });
});
// UPI
app.get("/upi-qr", (req, res) => {
    res.json({
        qr: "upi://pay?pa=yourupi@upi&pn=Stable Fin&am=100&cu=INR"
    });
});
// Crypto
app.get("/crypto-link", (req, res) => {
    res.json({
        link: "https://nowpayments.io/payment/?iid=demo123",
        message: "Crypto payment link generated 🚀"
    });
});
// ✅ CRITICAL FIX FOR RENDER
const PORT = Number(process.env.PORT) || 10000;
// ⚠️ MUST LISTEN LIKE THIS
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
