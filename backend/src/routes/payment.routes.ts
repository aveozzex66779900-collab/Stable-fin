
import { Router } from "express";

import { confirmPayment } from "../controllers/payment.controller";



const router = Router();

router.post("/", (req, res) => {
  const { amount } = req.body;

  return res.status(200).json({
    success: true,
    message: "Payment API working",
    amount
  });
});


router.post("/confirm", confirmPayment);



export default router;

