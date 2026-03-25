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
exports.openTicket = exports.updateTicketStatus = exports.getTickets = exports.createTicket = void 0;
const ticket_model_1 = __importDefault(require("../models/ticket.model"));
const createTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield ticket_model_1.default.create(req.body);
    res.status(201).json(ticket);
});
exports.createTicket = createTicket;
const getTickets = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tickets = yield ticket_model_1.default.find();
    res.json(tickets);
});
exports.getTickets = getTickets;
const updateTicketStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ticket = yield ticket_model_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ticket);
});
exports.updateTicketStatus = updateTicketStatus;
const openTicket = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.openTicket = openTicket;
