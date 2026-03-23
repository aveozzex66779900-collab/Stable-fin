import { Router } from "express";
import { affiliateStats } from "../controllers/affiliate.controller";

const router = Router();

router.get("/stats", affiliateStats);

export default router;

