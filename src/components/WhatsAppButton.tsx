import { MessageCircle } from "lucide-react";

const PHONE = "919555527775";
const MESSAGE = encodeURIComponent(
  "Hi, I want to place an order from Safe Sky Kitchen.\n\nName:\nItems:\nQuantity:\nDelivery Address:\nPreferred Time:\nPayment Mode (Cash/UPI):\n\nPlease confirm my order. Thank you!"
);

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${PHONE}?text=${MESSAGE}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    aria-label="Order on WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
    <span className="hidden sm:inline">Order on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
