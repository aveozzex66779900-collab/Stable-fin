import { Request, Response } from "express";

export const affiliateStats = (_: Request, res: Response) => {
  res.json({
    totalEarnings: 5000,
    referrals: 12
  });
};

