import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// Health
app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

// Test
app.get("/test", (req, res) => {
  res.json({ message: "API working 💰" });
});

// QR
app.get("/qr", (req, res) => {
  res.json({ qr: "QR_CODE_DATA" });
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

const PORT = Number(process.env.PORT) || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});