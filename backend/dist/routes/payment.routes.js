"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
const router = (0, express_1.Router)();
router.post("/", (req, res) => {
    const { amount } = req.body;
    return res.status(200).json({
        success: true,
        message: "Payment API working",
        amount
    });
});
router.post("/confirm", payment_controller_1.confirmPayment);
exports.default = router;
