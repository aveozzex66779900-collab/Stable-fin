
import React from "react";

const PaymentButton: React.FC = () => {
  const handlePayment = async () => {
    alert("Payment Started");
  };

  return (
    <button
      onClick={handlePayment}
      style={{
        padding: "12px 24px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#2563eb",
        color: "white",
      }}
    >
      Pay Now
    </button>
  );
};

export default PaymentButton;
