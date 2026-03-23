
import { Request, Response } from "express";
import QRCode from "qrcode";

export const createQrPayment = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required"
      });
    }

    // Dummy payment payload (MVP)
    const paymentPayload = `PAYMENT|AMOUNT:${amount}|REF:${Date.now()}`;

    const qrCode = await QRCode.toDataURL(paymentPayload);

    return res.status(200).json({
      success: true,
      message: "QR generated successfully",
      qrCode,
      amount
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "QR Pay failed"
    });
  }
};

