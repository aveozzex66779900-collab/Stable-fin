"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let tickets = [];
// Create ticket
router.post("/create", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "All fields required" });
    }
    const ticket = {
        id: "TICKET_" + Date.now(),
        name,
        email,
        message,
        status: "OPEN",
        createdAt: new Date()
    };
    tickets.push(ticket);
    res.json({
        success: true,
        message: "Ticket created successfully",
        ticket
    });
});
// Get all tickets
router.get("/all", (_req, res) => {
    res.json({
        success: true,
        tickets
    });
});
exports.default = router;
//# sourceMappingURL=support.js.map