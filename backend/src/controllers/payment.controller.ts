
import { Request, Response } from "express";

export const confirmPayment = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount missing",
      });
    }

    // simulate real payment processing
    await new Promise((resolve) => setTimeout(resolve, 800));

    return res.status(200).json({
      success: true,
      message: "Payment successful",
      transactionId: "TXN_" + Date.now(),
      amount,
      mode: "QR_DEMO",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Payment failed",
    });
  }
};
