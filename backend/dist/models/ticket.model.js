"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ticketSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ["open", "in_progress", "closed"],
        default: "open",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Ticket", ticketSchema);
//# sourceMappingURL=ticket.model.js.map