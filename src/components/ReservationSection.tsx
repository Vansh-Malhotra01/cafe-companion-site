import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, User, Phone, MessageCircle } from "lucide-react";

const PHONE = "919555527775";

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    note: "",
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hi, I'd like to reserve a table at Safe Sky Kitchen.\n\n` +
      `👤 Name: ${form.name}\n` +
      `📞 Phone: ${form.phone}\n` +
      `📅 Date: ${form.date}\n` +
      `🕐 Time: ${form.time}\n` +
      `👥 Guests: ${form.guests}\n` +
      (form.note ? `📝 Note: ${form.note}\n` : "") +
      `\nPlease confirm my reservation. Thank you!`
    );
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
  };

  const timeSlots = [
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  ];

  // Get today's date in YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Reserve
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Book a <span className="text-gradient">Table</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Reserve your spot and enjoy a delightful dining experience with us.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg"
        >
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <User className="w-4 h-4 text-primary" /> Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> Phone
              </label>
              <input
                type="tel"
                required
                maxLength={15}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-primary" /> Date
              </label>
              <input
                type="date"
                required
                min={today}
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Time
              </label>
              <select
                required
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-colors"
              >
                <option value="" disabled>Select time</option>
                {timeSlots.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> Number of Guests
            </label>
            <div className="flex gap-2 flex-wrap">
              {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => update("guests", n)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    form.guests === n
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Special note */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Special Requests (optional)
            </label>
            <textarea
              maxLength={500}
              value={form.note}
              onChange={(e) => update("note", e.target.value)}
              placeholder="Birthday celebration, window seat, dietary needs…"
              rows={3}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Reserve via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ReservationSection;
