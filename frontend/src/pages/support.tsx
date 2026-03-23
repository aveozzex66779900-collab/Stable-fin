
import { useState, useEffect } from "react";
import { createTicket, getTickets } from "../api/support";

export default function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [tickets, setTickets] = useState<any[]>([]);

  const submit = async () => {
    await createTicket(form);
    setForm({ name: "", email: "", message: "" });
    loadTickets();
  };

  const loadTickets = async () => {
    const res = await getTickets();
    setTickets(res.data.tickets);
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Customer Support</h2>

      <input placeholder="Name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input placeholder="Email" value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <textarea placeholder="Message" value={form.message}
        onChange={e => setForm({ ...form, message: e.target.value })} />

      <button onClick={submit}>Submit Ticket</button>

      <hr />

      <h3>Tickets</h3>
      {tickets.map(t => (
        <div key={t.id}>
          <b>{t.id}</b> – {t.message} ({t.status})
        </div>
      ))}
    </div>
  );
}
