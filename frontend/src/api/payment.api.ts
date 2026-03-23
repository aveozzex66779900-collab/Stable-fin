

import apiClient from "../utils/apiClient";

export const createPayment = async (amount: number) => {
  const res = await apiClient.post("/payment/create", {
    amount,
  });
  return res.data;
};

