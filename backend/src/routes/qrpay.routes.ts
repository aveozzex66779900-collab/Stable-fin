
import { Router } from "express";
import QRCode from "qrcode";

const router = Router();

router.post("/generate", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({ message: "Amount required" });
    }

    const qrData = `upi://pay?pa=test@upi&am=${amount}&cu=INR`;

    const qrCode = await QRCode.toDataURL(qrData);

    return res.status(200).json({
      success: true,
      qrCode,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "QR generation failed" });
  }
});

export default router;
