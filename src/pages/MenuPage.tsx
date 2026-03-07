import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type MenuItem = { name: string; desc: string; price: string; veg?: boolean };

type Category = { name: string; emoji: string; items: MenuItem[] };

const menu: Category[] = [
  {
    name: "North Indian",
    emoji: "🍛",
    items: [
      { name: "Butter Chicken", desc: "Creamy tomato gravy with tender chicken pieces", price: "₹220" },
      { name: "Paneer Butter Masala", desc: "Rich paneer cubes in makhani gravy", price: "₹200", veg: true },
      { name: "Dal Makhani", desc: "Slow-cooked black lentils with butter & cream", price: "₹180", veg: true },
      { name: "Chicken Biryani", desc: "Fragrant basmati rice layered with spiced chicken", price: "₹250" },
      { name: "Veg Biryani", desc: "Aromatic rice with seasonal vegetables", price: "₹200", veg: true },
      { name: "Kadhai Chicken", desc: "Wok-tossed chicken with bell peppers & spices", price: "₹230" },
      { name: "Malai Kofta", desc: "Paneer & potato dumplings in creamy gravy", price: "₹190", veg: true },
      { name: "Tawa Roti", desc: "Fresh whole wheat flatbread", price: "₹20", veg: true },
      { name: "Butter Naan", desc: "Soft leavened bread brushed with butter", price: "₹50", veg: true },
      { name: "Garlic Naan", desc: "Naan topped with garlic & cilantro", price: "₹60", veg: true },
    ],
  },
  {
    name: "Chinese",
    emoji: "🥡",
    items: [
      { name: "Chicken Manchurian", desc: "Crispy chicken in tangy Manchurian sauce", price: "₹200" },
      { name: "Veg Manchurian", desc: "Veggie balls in spicy Indo-Chinese gravy", price: "₹170", veg: true },
      { name: "Hakka Noodles", desc: "Stir-fried noodles with vegetables", price: "₹150", veg: true },
      { name: "Chicken Fried Rice", desc: "Wok-tossed rice with chicken & veggies", price: "₹180" },
      { name: "Chilli Paneer", desc: "Crispy paneer tossed with peppers & soy", price: "₹190", veg: true },
      { name: "Chilli Chicken", desc: "Spicy chicken with green chillies & onion", price: "₹210" },
      { name: "Spring Rolls (4 pcs)", desc: "Crispy rolls stuffed with veggies", price: "₹130", veg: true },
      { name: "Momos (8 pcs)", desc: "Steamed or fried dumplings with spicy chutney", price: "₹120", veg: true },
    ],
  },
  {
    name: "Burgers & Sandwiches",
    emoji: "🍔",
    items: [
      { name: "Classic Chicken Burger", desc: "Grilled chicken patty with lettuce & mayo", price: "₹150" },
      { name: "Double Smash Burger", desc: "Two juicy patties with melted cheese", price: "₹180" },
      { name: "Paneer Tikka Burger", desc: "Spiced paneer patty with mint chutney", price: "₹140", veg: true },
      { name: "Aloo Tikki Burger", desc: "Crispy potato patty with tangy sauce", price: "₹100", veg: true },
      { name: "Club Sandwich", desc: "Triple-layer with chicken, egg & veggies", price: "₹160" },
      { name: "Grilled Veg Sandwich", desc: "Loaded with cheese, corn & peppers", price: "₹120", veg: true },
      { name: "Mushroom Wrap Roll", desc: "Roasted mushrooms in a crispy wrap", price: "₹150", veg: true },
      { name: "Chicken Shawarma Roll", desc: "Juicy chicken with garlic sauce in pita", price: "₹160" },
    ],
  },
  {
    name: "Pizza",
    emoji: "🍕",
    items: [
      { name: "Margherita", desc: "Classic tomato, mozzarella & fresh basil", price: "₹200", veg: true },
      { name: "Farmhouse", desc: "Bell peppers, mushrooms, onions & olives", price: "₹250", veg: true },
      { name: "Chicken Tikka Pizza", desc: "Tandoori chicken, onions & peppers", price: "₹280" },
      { name: "BBQ Chicken", desc: "Smoky BBQ sauce with grilled chicken", price: "₹290" },
      { name: "Paneer Makhani Pizza", desc: "Butter paneer topping on cheesy base", price: "₹260", veg: true },
      { name: "Loaded Non-Veg", desc: "Chicken, keema & sausage with extra cheese", price: "₹320" },
      { name: "Garlic Bread (4 pcs)", desc: "Toasted with garlic butter & herbs", price: "₹100", veg: true },
      { name: "Cheesy Garlic Bread", desc: "Loaded with mozzarella & garlic", price: "₹130", veg: true },
    ],
  },
  {
    name: "Beverages",
    emoji: "🥤",
    items: [
      { name: "Cold Coffee", desc: "Creamy blended coffee with ice cream", price: "₹100", veg: true },
      { name: "Mango Shake", desc: "Fresh mango blended with chilled milk", price: "₹110", veg: true },
      { name: "Oreo Shake", desc: "Crushed Oreo cookies in vanilla milkshake", price: "₹120", veg: true },
      { name: "Fresh Lime Soda", desc: "Sweet or salted, freshly squeezed", price: "₹60", veg: true },
      { name: "Masala Chai", desc: "Spiced Indian tea with ginger & cardamom", price: "₹30", veg: true },
      { name: "Mojito (Virgin)", desc: "Mint, lime & soda — refreshing cooler", price: "₹90", veg: true },
      { name: "Soft Drinks", desc: "Coke, Sprite, Fanta, Thumbs Up", price: "₹40", veg: true },
      { name: "Mineral Water", desc: "Packaged drinking water", price: "₹20", veg: true },
    ],
  },
];

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Our <span className="text-gradient">Menu</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              ₹300 for two (approx.) · 
              <span className="inline-block w-2.5 h-2.5 bg-green-600 rounded-sm ml-3 mr-1 align-middle" /> Veg available
            </p>
          </motion.div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container mx-auto px-6 py-12 space-y-16">
        {menu.map((cat, catIdx) => (
          <motion.section
            key={cat.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.05 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{cat.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{cat.name}</h2>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>

            <div className="grid gap-1">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start justify-between gap-4 py-4 px-4 rounded-lg hover:bg-card transition-colors group"
                >
                  <div className="flex gap-3 items-start min-w-0">
                    <span
                      className={`mt-1.5 w-3 h-3 rounded-sm border-2 shrink-0 ${
                        item.veg ? "border-green-600" : "border-red-500"
                      }`}
                    >
                      <span
                        className={`block w-1.5 h-1.5 rounded-full m-px ${
                          item.veg ? "bg-green-600" : "bg-red-500"
                        }`}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-primary font-semibold text-sm whitespace-nowrap pt-0.5">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-secondary border-t border-border py-10 text-center">
        <p className="text-muted-foreground text-sm mb-4">
          Prices may vary. For the latest menu, call us or order online.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+919555527775"
            className="bg-primary text-primary-foreground text-sm font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Call +91 95555 27775
          </a>
          <Link
            to="/"
            className="bg-card text-foreground border border-border text-sm font-semibold px-8 py-3 rounded-full hover:border-primary/40 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
