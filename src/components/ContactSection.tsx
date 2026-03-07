import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Visit Safe Sky Kitchen
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: MapPin, label: "Address", value: "E-1, 367, Main Road, Block E, Bali Nagar, Rajouri Garden, New Delhi — 110015" },
            { icon: Phone, label: "Call Us", value: "+91 95555 27775" },
            { icon: Clock, label: "Hours", value: "11 AM – 3 AM · Open Every Day" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Order buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-14"
        >
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Order on Zomato <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-8 py-3 rounded-full font-semibold text-sm hover:border-primary/40 transition-colors"
          >
            Order on Swiggy <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
