
import { Router } from "express";

import paymentRoutes from "./payment.routes";
import qrpayRoutes from "./qrpay.routes";
import ticketRoutes from "./support";
import affiliateRoutes from "./affiliate.routes";

const router = Router();

router.use("/payments", paymentRoutes);
router.use("/qrpay", qrpayRoutes);
router.use("/tickets", ticketRoutes);
router.use("/affiliate", affiliateRoutes);

export default router;




