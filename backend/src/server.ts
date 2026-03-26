import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ PAYMENT ROUTE
app.get("/payment", (req, res) => {
  res.json({
    success: true,
    message: "Payment API working 💰"
  });
});

// ✅ QR ROUTE (test)
app.get("/qr", (req, res) => {
  res.json({
    qr: "QR_CODE_DATA"
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});