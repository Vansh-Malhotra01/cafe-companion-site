import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";

const dishes = [
  { name: "Chicken Tikka Masala", desc: "Rich tikka pieces in creamy masala gravy", price: "₹495", image: dish1, tag: "Bestseller" },
  { name: "Double Smash Burger", desc: "Juicy patties with melted cheese & fries", price: "₹315", image: dish2, tag: "Popular" },
  { name: "Roasted Mushroom Wrap", desc: "Roasted mushroom filling in crispy wraps", price: "₹340", image: dish3, tag: "Must Try" },
  { name: "Chicken Tikka Pizza", desc: "Tandoori chicken with peppers & onions", price: "₹530", image: dish4, tag: "New" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Our Specialties</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Fan Favorites
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {dish.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-lg font-semibold text-foreground">{dish.name}</h3>
                  <span className="text-primary font-semibold text-sm">{dish.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-muted-foreground text-sm">₹500 for two (approx.) · Sandwich · Burger · Chinese · Street Food · Pizza · North Indian</p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Full Menu
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default MenuSection;
