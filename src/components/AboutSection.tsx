import { motion } from "framer-motion";
import { Utensils, Heart, Users } from "lucide-react";

const features = [
  { icon: Utensils, title: "Multi-Cuisine", desc: "From North Indian curries to gourmet burgers — a menu for every mood." },
  { icon: Heart, title: "Made with Love", desc: "Fresh ingredients, authentic recipes, and flavors you'll crave again." },
  { icon: Users, title: "Perfect Hangout", desc: "Cozy ambiance with fairy lights — ideal for friends, family & dates." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Good Food,<br />
              <span className="text-gradient italic">Good Vibes</span>
            </h2>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              Nestled in the heart of Bali Nagar, Safe Sky Kitchen is more than just a restaurant — 
              it's a place where communities come together over incredible food. Our chefs craft each 
              dish with passion, blending traditional flavors with modern twists.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              Open late till 3 AM, we're your go-to spot for midnight cravings, 
              weekend feasts, and everything in between.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 items-start bg-card p-6 rounded-xl border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
