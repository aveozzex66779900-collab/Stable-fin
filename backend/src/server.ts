import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// ✅ VERY IMPORTANT ROUTE
app.get("/test", (req, res) => {
  res.json({ message: "API working 💰" });
});

// UPI
app.get("/upi-qr", (req, res) => {
  res.json({
    qr: "upi://pay?pa=yourupi@upi&pn=Stable Fin&am=100&cu=INR"
  });
});

// Crypto
app.get("/crypto-link", (req, res) => {
  res.json({
    link: "https://nowpayments.io/payment/?iid=demo123"
  });
});

// Root
app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

const PORT = Number(process.env.PORT) || 10000;


// ================= B2B PAYMENT (SAFE ADD) =================

let b2bPayments: any = {};

// Create B2B Payment
app.post("/b2b/create", (req, res) => {
  const id = Date.now();

  const payment = {
    id,
    company: req.body.company || "Client",
    amount: req.body.amount || 0,
    status: "pending",
    createdAt: new Date()
  };

  b2bPayments[id] = payment;

  res.json(payment);
});

// Check B2B Payment Status
app.get("/b2b/status/:id", (req, res) => {
  const payment = b2bPayments[req.params.id];

  if (!payment) {
    return res.json({ error: "Payment not found" });
  }

  res.json(payment);
});


// Simulate Payment Success (for testing)
app.get("/b2b/pay/:id", (req, res) => {
  const payment = b2bPayments[req.params.id];

  if (!payment) {
    return res.json({ error: "Payment not found" });
  }

  payment.status = "paid";

  res.json({
    message: "Payment successful ✅",
    payment
  });
});


let tickets: any = {};
app.post("/support/create", (req, res) => {
  const id = Date.now();

  const ticket = {
    id,
    name: req.body.name || "User",
    issue: req.body.issue || "No issue provided",
    status: "open",
    createdAt: new Date(),
    replies: []
  };

  tickets[id] = ticket;

  res.json(ticket);
});

app.get("/support/all", (req, res) => {
  res.json(Object.values(tickets));
});

app.get("/support/:id", (req, res) => {
  const ticket = tickets[req.params.id];

  if (!ticket) {
    return res.json({ error: "Ticket not found" });
  }

  res.json(ticket);
});

app.post("/support/reply/:id", (req, res) => {
  const ticket = tickets[req.params.id];

  if (!ticket) {
    return res.json({ error: "Ticket not found" });
  }

  ticket.replies.push({
    message: req.body.message,
    time: new Date()
  });

  res.json(ticket);
});

app.get("/support/close/:id", (req, res) => {
  const ticket = tickets[req.params.id];

  if (!ticket) {
    return res.json({ error: "Ticket not found" });
  }

  ticket.status = "closed";

  res.json(ticket);
});

 

















app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});