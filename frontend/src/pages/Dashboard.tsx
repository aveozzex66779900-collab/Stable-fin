import QRPay from "./QRpay";
import Payment from "./Payment";
import Support from "./Support";

export default function Dashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h1>All Features Dashboard</h1>

      <hr />
      <h2>1. QR Pay</h2>
      <QRPay />

      <hr />
      <h2>2. Payment</h2>
      <Payment />

      <hr />
      <h2>3. Customer Support</h2>
      <Support />
    </div>
  );
}
