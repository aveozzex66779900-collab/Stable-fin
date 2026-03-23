
import { ethers} from "ethers";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// ---------------- DATA ----------------
let wallet = {
  usdt: 100,
  inr: 8300
};


  

type Transaction = {
  amount: number;
  status: string;
  sender?: string;    // optional (SAFE)
  receiver?: string;  // optional (SAFE)
};

let transactions: Transaction[] = [
  { amount: 50, status: "success" },
  { amount: 20, status: "pending" }
];






// ---------------- APIs ----------------

// Wallet API
app.get("/wallet", (req, res) => {
  res.json(wallet);
});

// Transactions API
app.get("/transactions", (req, res) => {
  res.json(transactions);
});

// Payment simulation
app.get("/pay/:id", (req, res) => {
  // update wallet
  wallet.usdt += 10;
  wallet.inr += 830;

  // add transaction
  transactions.push({
    amount: 10,
    status: "success"
  });

  console.log("💰 Payment received");

  res.send("✅ Payment Successful");
});



// ===== B2B PAYMENT =====
app.post("/b2b/pay", (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (!sender || !receiver || !amount) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // simple logic (simulation)
  if (wallet.usdt < amount) {
    return res.status(400).json({ error: "Insufficient balance" });
  }

  // deduct from sender (global wallet for demo)
  wallet.usdt -= amount;
  wallet.inr -= amount * 83;

  // add transaction
  transactions.push({
    amount,
    status: "B2B Success",
    sender,
    receiver
  });

  console.log(`🏢 B2B Payment: ${sender} → ${receiver} : ${amount}`);

  res.json({ message: "B2B Payment Successful ✅" });
});

// ===== CRYPTO WALLET ID GENERATION =====

function generateWalletId() {
  return "WALLET_" + Math.random().toString(36).substring(2, 10);
}

let walletId = generateWalletId();

// API to get wallet ID
app.get("/wallet/id", (req, res) => {
  res.json({ walletId });
});




// ===== REAL WALLET GENERATION =====

// ===== REAL WALLET ROUTE =====
app.get("/wallet/create", (req, res) => {
  const wallet = ethers.Wallet.createRandom();

  res.json({
    address: wallet.address,
    privateKey: wallet.privateKey
  });
});
  


import Razorpay from "razorpay";

// ===== RAZORPAY INSTANCE =====
const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET"
});

// ===== CREATE ORDER =====
app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "order_rcptid_11"
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (err) {
    console.log(err);
    res.status(500).send("Payment error");
  }
});








// ---------------- SERVER ----------------
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


