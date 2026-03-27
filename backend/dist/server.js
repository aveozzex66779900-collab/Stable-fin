"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/qr", (req, res) => {
    const upiId = "yourupi@upi"; // 🔥 replace with your real UPI
    const name = "Stable Fin";
    const amount = "100";
    const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    res.json({
        qr: upiLink
    });
});
// ✅ TEST ROUTE
app.get("/", (req, res) => {
    res.send("Backend is working 🚀");
});
// ✅ PAYMENT ROUTE
app.get("/payment", (req, res) => {
    res.json({
        success: true,
        message: "Payment API working 💰"
    });
});
// ✅ QR ROUTE (test)
app.get("/qr", (req, res) => {
    const upiId = "yourupi@upi"; // 🔥 replace with real UPI
    const name = "Stable Fin";
    const amount = "100";
    const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    res.json({
        qr: upiLink
    });
});
app.get("/", (req, res) => {
    res.send("Backend Live ✅");
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map