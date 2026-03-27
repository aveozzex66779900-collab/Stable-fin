"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openTicket = exports.updateTicketStatus = exports.getTickets = exports.createTicket = void 0;
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const createTicket = async (req, res) => {
    const ticket = await ticket_model_1.default.create(req.body);
    res.status(201).json(ticket);
};
exports.createTicket = createTicket;
const getTickets = async (_req, res) => {
    const tickets = await ticket_model_1.default.find();
    res.json(tickets);
};
exports.getTickets = getTickets;
const updateTicketStatus = async (req, res) => {
    const ticket = await ticket_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ticket);
};
exports.updateTicketStatus = updateTicketStatus;
const openTicket = async (req, res) => {
    try {
        const { title, description } = req.body;
        // Validate request body
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }
        // TODO: Save ticket to database here
        return res.status(201).json({
            success: true,
            message: "Ticket created successfully",
            data: {
                title,
                description,
            },
        });
    }
    catch (error) {
        console.error("Ticket Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
exports.openTicket = openTicket;
//# sourceMappingURL=ticket.controller.js.map