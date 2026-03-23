

import api from "../lib/apiClient";

export const generateQR = async (payload: any) => {
  const res = await api.post("/qrpay/generate", payload);
  return res.data;
};
