import axios from "axios";

const API = "http://localhost:5000/api/support";

export const createTicket = (data: any) =>
  axios.post(`${API}/create`, data);

export const getTickets = () =>
  axios.get(`${API}/all`);
