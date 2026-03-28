import express from "express";
import cors from "cors";

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ FIXED CORS (VERY IMPORTANT)


app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.options("*", cors());



// ✅ HEALTH CHECK (Render needs this)
app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

// ================= EXISTING FEATURES (SAFE) =================

// QR API
app.get("/qr", (req, res) => {
  res.json({
    qr: "QR_CODE_DATA"
  });
});

// UPI QR API
app.get("/upi-qr", (req, res) => {
  res.json({
    qr: "upi://pay?pa=yourupi@upi&pn=Stable Fin&am=100&cu=INR"
  });
});

// Test API
app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Payment API working 💰"
  });
});

// ================= NEW FEATURE (SAFE ADD) =================

// ✅ CRYPTO PAYMENT LINK
app.get("/crypto-link", (req, res) => {
  res.json({
    link: "https://nowpayments.io/payment/?iid=demo123",
    message: "Crypto payment link generated 🚀"
  });
});

// ================= SERVER =================

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

