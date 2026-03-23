
import { Request, Response } from "express";
import Ticket from "../models/ticket.model";

export const createTicket = async (req: Request, res: Response) => {
  const ticket = await Ticket.create(req.body);
  res.status(201).json(ticket);
};

export const getTickets = async (_req: Request, res: Response) => {
  const tickets = await Ticket.find();
  res.json(tickets);
};

export const updateTicketStatus = async (req: Request, res: Response) => {
  const ticket = await Ticket.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(ticket);
};


export const openTicket = async (req: Request, res: Response): Promise<Response> => {
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

  } catch (error) {
    console.error("Ticket Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
