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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});