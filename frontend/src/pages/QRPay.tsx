
import { useState } from "react";
import {QRCodeCanvas} from "qrcode.react";
import axios from "axios";

export default function QRPay() {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [qrValue, setQrValue] = useState(
    "upi://pay?pa=test@upi&pn=DemoPay"
  );

  const generateQR = () => {
    if (!amount) return;
    setQrValue(
      `upi://pay?pa=test@upi&pn=DemoPay&am=${amount}`
    );
  };

  const confirmPayment = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/payment/confirm",
        { amount }
      );
      setStatus(res.data.message || "Payment success");
    } catch {
      setStatus("Payment failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h2>QR Payment</h2>

      <QRCodeCanvas value={qrValue} size={220} />

      <div style={{ marginTop: 20 }}>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ padding: 8 }}
        />
      </div>

      <div style={{ marginTop: 10 }}>
        <button onClick={generateQR}>Generate QR</button>
        <button
          onClick={confirmPayment}
          style={{ marginLeft: 10 }}
        >
          Confirm Payment
        </button>
      </div>

      {status && <p>{status}</p>}
    </div>
  );
}

