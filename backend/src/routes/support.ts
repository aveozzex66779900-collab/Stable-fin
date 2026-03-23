
import { Router, Request, Response } from "express";

const router = Router();

let tickets: any[] = [];

// Create ticket
router.post("/create", (req: Request, res: Response) => {
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
router.get("/all", (_req: Request, res: Response) => {
  res.json({
    success: true,
    tickets
  });
});

export default router;
