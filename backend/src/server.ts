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















app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});