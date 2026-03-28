"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes")); // adjust if your path differs
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
const support_1 = __importDefault(require("./routes/support"));
const app = (0, express_1.default)();
/* =======================
   CORS — THIS IS THE FIX
   ======================= */
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // EXACT Vite port
    credentials: true,
}));
/* ======================= */
app.use(express_1.default.json());
// API ROUTES
app.use("/api", routes_1.default);
// HEALTH CHECK
app.get("/", (_req, res) => {
    res.send("Backend running OK");
});
app.use("/api/payment", payment_routes_1.default);
app.use("/api/support", support_1.default);
exports.default = app;
// Wallet API
app.get("/wallet", (req, res) => {
    res.json({
        usdt: 100,
        inr: 8300
    });
});
// Transactions API
app.get("/transactions", (req, res) => {
    res.json([
        { amount: 50, status: "success" },
        { amount: 20, status: "pending" }
    ]);
});
