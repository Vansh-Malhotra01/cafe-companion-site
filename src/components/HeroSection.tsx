import { motion } from "framer-motion";
import { MapPin, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Safe Sky Kitchen interior with warm fairy lights"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : i === 4 ? "fill-primary/50 text-primary" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-sm text-secondary-foreground">4.5 · 158 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6">
            <span className="text-gradient">Safe Sky</span>
            <br />
            <span className="text-foreground">Kitchen</span>
          </h1>

          <p className="text-lg text-secondary-foreground max-w-md mb-8 font-light">
            Where every flavor tells a story. Burgers, North Indian classics, Chinese favorites, 
            and fresh pizzas — all under one sky.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-secondary-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bali Nagar, Rajouri Garden</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Open · Closes 3 AM</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
