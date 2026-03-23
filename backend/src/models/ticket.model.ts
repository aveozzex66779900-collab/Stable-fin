import { Schema, model, Document } from "mongoose";

export interface ITicket extends Document {
  title: string;
  description: string;
  status: "open" | "in_progress" | "closed";
}

const ticketSchema = new Schema<ITicket>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["open", "in_progress", "closed"],
      default: "open",
    },
  },
  { timestamps: true }
);

export default model<ITicket>("Ticket", ticketSchema);
