import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.get("/qr", (req, res) => {
  const upiId = "yourupi@upi"; // 🔥 replace with your real UPI
  const name = "Stable Fin";
  const amount = "100";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({
    qr: upiLink
  });
});





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
  const upiId = "yourupi@upi"; // 🔥 replace with real UPI
  const name = "Stable Fin";
  const amount = "100";

  const upiLink = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  res.json({
    qr: upiLink
  });
});





app.get("/", (req, res) => {
  res.send("Backend Live ✅");
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});