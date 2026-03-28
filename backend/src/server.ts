import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));

app.options("*", cors());

// ✅ HEALTH CHECK (REQUIRED)
app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

// ================= ROUTES =================

// Test
app.get("/test", (req, res) => {
  res.json({ success: true, message: "API working 💰" });
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
    link: "https://nowpayments.io/payment/?iid=demo123",
    message: "Crypto payment link generated 🚀"
  });
});

// ✅ CRITICAL FIX FOR RENDER
const PORT = Number(process.env.PORT) || 10000;
// ⚠️ MUST LISTEN LIKE THIS
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});