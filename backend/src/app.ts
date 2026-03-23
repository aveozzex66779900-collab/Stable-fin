



import express from "express";
import cors from "cors";
import routes from "./routes"; // adjust if your path differs
import paymentRoutes from "./routes/payment.routes";
import supportRoutes from "./routes/support";

const app = express();

/* =======================
   CORS — THIS IS THE FIX
   ======================= */
app.use(
  cors({
    origin: "http://localhost:5173", // EXACT Vite port
    credentials: true,
  })
);


/* ======================= */

app.use(express.json());

// API ROUTES
app.use("/api", routes);

// HEALTH CHECK
app.get("/", (_req, res) => {
  res.send("Backend running OK");
});
app.use("/api/payment", paymentRoutes);
app.use("/api/support", supportRoutes);

export default app;
// Wallet API
app.get("/wallet", (req, res) => {
  res.json({
    usdt: 100,
    inr: 8300
  });
});

// Transactions API
app.get("/transactions", (req, res) => {
  res.json([
    { amount: 50, status: "success" },
    { amount: 20, status: "pending" }
  ]);
});