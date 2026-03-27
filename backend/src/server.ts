
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

/* ================= OLD FEATURES (DO NOT TOUCH) ================= */

// Old QR (dummy)
app.get("/qr", (req, res) => {
  res.json({ qr: "QR_CODE_DATA" });
});

// Payment test
app.get("/payment", (req, res) => {
  res.json({ message: "Payment API working 💰" });
});

/* ================= NEW FEATURES (ADDED SAFELY) ================= */

// ✅ Real UPI QR
app.get("/upi-qr", (req, res) => {
  const upiId = "yourupi@upi"; // 🔥 replace
  const name = "Stable Fin";
  const amount = "100";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({ qr: upiLink });
});

// ✅ Crypto Payment Link
app.get("/crypto-link", (req, res) => {
  const cryptoLink = "https://commerce.coinbase.com/checkout/demo";

  res.json({ link: cryptoLink });
});

/* ================= HEALTH ================= */

app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});