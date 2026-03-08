import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";

const PHONE = "919555527775";
const MESSAGE = encodeURIComponent(
  "Hi, I want to place an order from Safe Sky Kitchen.\n\nName:\nItems:\nQuantity:\nDelivery Address:\nPreferred Time:\nPayment Mode (Cash/UPI):\n\nPlease confirm my order. Thank you!"
);

const PromoPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo_dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("promo_dismissed", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">
          Get <span className="text-primary">10% OFF</span>
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          Order directly on WhatsApp and enjoy 10% off your first order!
        </p>

        <a
          href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          Order on WhatsApp
        </a>

        <button
          onClick={close}
          className="block mx-auto mt-4 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          No thanks
        </button>
      </div>
    </div>
  );
};

export default PromoPopup;
