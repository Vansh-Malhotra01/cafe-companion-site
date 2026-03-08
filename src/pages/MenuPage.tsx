import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

type MenuItem = { name: string; price: string; veg?: boolean; egg?: boolean };
type Category = { name: string; emoji: string; items: MenuItem[] };

const menu: Category[] = [
  {
    name: "Between The Breads (Burger)",
    emoji: "🥪",
    items: [
      { name: "Roasted Mushroom Wrap", price: "₹340", veg: true },
      { name: "Chicken Club Sandwich", price: "₹340" },
      { name: "The Veggies Burger", price: "₹315", veg: true },
      { name: "Herbed Vegetable Club Sandwich", price: "₹290", veg: true },
    ],
  },
  {
    name: "Burger",
    emoji: "🍔",
    items: [
      { name: "Chicken Kurkure Burger", price: "₹165" },
      { name: "Paneer Kurkure Burger", price: "₹155", veg: true },
      { name: "Egg Burger", price: "₹85", egg: true },
      { name: "Aloo Tikki Burger", price: "₹75", veg: true },
      { name: "Paneer Tikka Burger", price: "₹125", veg: true },
      { name: "Chicken Burger", price: "₹105" },
    ],
  },
  {
    name: "Biryani",
    emoji: "🍚",
    items: [
      { name: "Mutton Biryani", price: "₹460" },
      { name: "Hyderabadi Biryani", price: "₹385" },
      { name: "Matka Biryani", price: "₹485", veg: true },
      { name: "Chicken Biryani", price: "₹385" },
      { name: "Egg Biryani", price: "₹360", egg: true },
      { name: "Veg Biryani", price: "₹310", veg: true },
    ],
  },
  {
    name: "Charcoal Tandoor Non-Veg",
    emoji: "🔥",
    items: [
      { name: "Peri Peri Wings", price: "₹345" },
      { name: "Tandoori Chicken", price: "₹360" },
      { name: "House Special Chicken Tikka", price: "₹485" },
      { name: "Galouti Kebab", price: "₹535" },
      { name: "Hariyali Chicken Tikka", price: "₹460" },
      { name: "Achari Chicken Tikka", price: "₹460" },
    ],
  },
  {
    name: "Charcoal Tandoor Veg",
    emoji: "🌿",
    items: [
      { name: "Dahi Ke Sholey", price: "₹395", veg: true },
      { name: "Tandoori Soya Chaap", price: "₹395", veg: true },
      { name: "Tandoori Spring Roll", price: "₹370", veg: true },
      { name: "Kurkure Mushroom", price: "₹405", veg: true },
      { name: "Makhmali Kebab", price: "₹395", veg: true },
      { name: "Mushroom Galouti Kebab", price: "₹430", veg: true },
    ],
  },
  {
    name: "Chinese Item",
    emoji: "🥡",
    items: [
      { name: "Chicken Garlic Fried Rice", price: "₹315" },
      { name: "Veg Singaporean Rice", price: "₹305", veg: true },
      { name: "Chicken Singaporean Rice", price: "₹330" },
      { name: "Veg Fried Rice", price: "₹280", veg: true },
      { name: "Veg Schezwan Fried Rice", price: "₹305", veg: true },
      { name: "Veg Chilli Garlic Fried Rice", price: "₹315", veg: true },
    ],
  },
  {
    name: "Chopsuey",
    emoji: "🍜",
    items: [
      { name: "American Chopsuey", price: "₹325", veg: true },
      { name: "Chicken Chopsuey", price: "₹370" },
    ],
  },
  {
    name: "Noodles",
    emoji: "🍝",
    items: [
      { name: "Chicken Butter Garlic Noodles", price: "₹315" },
      { name: "Veg Butter Garlic Noodles", price: "₹290", veg: true },
      { name: "Veg Singapuri Noodles", price: "₹305", veg: true },
      { name: "Veg Schezwan Noodles", price: "₹290", veg: true },
      { name: "Chicken Hakka Noodles", price: "₹310" },
      { name: "Chicken Singapuri Noodles", price: "₹330" },
    ],
  },
  {
    name: "Momos",
    emoji: "🥟",
    items: [
      { name: "Chicken Kurkure Momos", price: "₹295" },
      { name: "Paneer Fried Momos", price: "₹220", veg: true },
      { name: "Paneer Afghani Momos", price: "₹260", veg: true },
      { name: "Paneer Steamed Momos", price: "₹210", veg: true },
      { name: "Chicken Cocktail Momos", price: "₹270" },
      { name: "Paneer Kurkure Momos", price: "₹285", veg: true },
    ],
  },
  {
    name: "Starters",
    emoji: "🍢",
    items: [
      { name: "Chilli Paneer Spring Roll", price: "₹295", veg: true },
      { name: "Chicken Cigar Roll", price: "₹345" },
      { name: "Dragon Chicken", price: "₹455" },
      { name: "Chicken Lollipop", price: "₹370" },
      { name: "Kasundi Fish Tikka", price: "₹630" },
      { name: "Honey Chilli Potato", price: "₹270", veg: true },
    ],
  },
  {
    name: "Soups",
    emoji: "🍲",
    items: [
      { name: "Veg Minestrone Soup", price: "₹220", veg: true },
      { name: "Veg Manchow Soup", price: "₹210", veg: true },
      { name: "Non Veg Minestrone Soup", price: "₹260" },
      { name: "Non Veg Manchow Soup", price: "₹245" },
      { name: "Veg Lemon Coriander Soup", price: "₹210", veg: true },
      { name: "Non Veg Lemon Coriander Soup", price: "₹245" },
    ],
  },
  {
    name: "Salads",
    emoji: "🥗",
    items: [
      { name: "Veg Greek Salad", price: "₹355", veg: true },
      { name: "Chicken Greek Salad", price: "₹415" },
      { name: "Veg Panzanella Salad", price: "₹365", veg: true },
      { name: "Green Salad", price: "₹205", veg: true },
      { name: "Chicken Panzanella Salad", price: "₹430" },
    ],
  },
  {
    name: "Veg Main Course",
    emoji: "🍛",
    items: [
      { name: "Dal Maharani", price: "₹355", veg: true },
      { name: "Paneer Butter Masala", price: "₹405", veg: true },
      { name: "Mattar Paneer", price: "₹385", veg: true },
      { name: "Palak Paneer", price: "₹430", veg: true },
      { name: "Butter Chaap", price: "₹365", veg: true },
      { name: "Paneer Tikka Masala", price: "₹405", veg: true },
    ],
  },
  {
    name: "Non-Veg Main Course",
    emoji: "🍗",
    items: [
      { name: "Chicken Tikka Masala", price: "₹495" },
      { name: "Chicken Rogan Josh", price: "₹495" },
      { name: "Tawa Chicken", price: "₹520" },
      { name: "Chicken Seekh Masala", price: "₹530" },
      { name: "Tawa Meat", price: "₹605" },
      { name: "Egg Curry (4 Egg)", price: "₹315", egg: true },
    ],
  },
  {
    name: "Rice & Breads",
    emoji: "🫓",
    items: [
      { name: "Garlic Paratha", price: "₹100", veg: true },
      { name: "Green Chilli Parantha", price: "₹100", veg: true },
      { name: "Tandoori Naan", price: "₹85", veg: true },
      { name: "Garlic Naan", price: "₹110", veg: true },
      { name: "Steamed Rice", price: "₹175", veg: true },
      { name: "Jeera Rice", price: "₹185", veg: true },
    ],
  },
  {
    name: "Sandwiches",
    emoji: "🥪",
    items: [
      { name: "Grilled Paneer Sandwich", price: "₹135", veg: true },
      { name: "Chicken Tikka Sandwich", price: "₹145" },
      { name: "Grilled Chicken Sandwich", price: "₹145" },
      { name: "Spice Of India (Veg)", price: "₹165", veg: true },
      { name: "Spice Of India (Non-Veg)", price: "₹165" },
      { name: "Veg Grilled Sandwich", price: "₹115", veg: true },
    ],
  },
  {
    name: "Veg Roll",
    emoji: "🌯",
    items: [
      { name: "Chilly Chaap Roll", price: "₹280", veg: true },
      { name: "Masala Chaap Roll", price: "₹315", veg: true },
      { name: "Chilly Paneer Roll", price: "₹305", veg: true },
      { name: "Falafel Roll", price: "₹270", veg: true },
      { name: "Paneer Tikka Roll", price: "₹315", veg: true },
      { name: "Malai Chaap Roll", price: "₹315", veg: true },
    ],
  },
  {
    name: "Non-Veg Roll",
    emoji: "🌯",
    items: [
      { name: "Chicken Seekh Roll", price: "₹270" },
      { name: "Mutton Seekh Roll", price: "₹310" },
      { name: "Chicken Tikka Roll", price: "₹245" },
      { name: "Afghani Tikka Roll", price: "₹260" },
      { name: "Chilli Chicken Roll", price: "₹245" },
      { name: "Chicken Shawarma Roll", price: "₹270" },
    ],
  },
  {
    name: "Taste Of Oven — Veg Pizza",
    emoji: "🍕",
    items: [
      { name: "Chilli Cheese Pizza", price: "₹300", veg: true },
      { name: "Paneer Tikka 'n' Cheese", price: "₹420", veg: true },
      { name: "Cheese Corn", price: "₹300", veg: true },
      { name: "Pan Pizza", price: "₹390", veg: true },
      { name: "Simply Veg", price: "₹240", veg: true },
      { name: "Healthy Veggies Pizza", price: "₹400", veg: true },
    ],
  },
  {
    name: "Taste Of Oven — Non-Veg Pizza",
    emoji: "🍕",
    items: [
      { name: "Grilled Kebab Pizza", price: "₹400" },
      { name: "Chicken Sausage Pizza", price: "₹300" },
      { name: "Chicken Shredded 'n' Cheese", price: "₹400" },
      { name: "Chicken Leaf Pizza", price: "₹300" },
      { name: "Butter Chicken Pizza", price: "₹450" },
      { name: "Chicken Cheese Burst", price: "₹440" },
    ],
  },
  {
    name: "Veg Pizzeria (Thin Crust)",
    emoji: "🍕",
    items: [
      { name: "Classic Margherita Pizza", price: "₹390", veg: true },
      { name: "Quattro Formaggi Pizza", price: "₹430", veg: true },
      { name: "Corn Mexican Pizza", price: "₹465", veg: true },
      { name: "Grilled Garden Veggie Pizza", price: "₹455", veg: true },
    ],
  },
  {
    name: "Non-Veg Pizzeria",
    emoji: "🍕",
    items: [
      { name: "Chicken Tikka Pizza", price: "₹530" },
      { name: "Pesto Chicken Pizza", price: "₹565" },
      { name: "Chicken BBQ Pizza", price: "₹545" },
      { name: "Chicken Overload Pizza", price: "₹575" },
    ],
  },
  {
    name: "Pasta",
    emoji: "🍝",
    items: [
      { name: "Non Veg Spaghetti Aglio E Olio", price: "₹480" },
      { name: "Veg Penne Alfredo Pasta", price: "₹395", veg: true },
      { name: "Non Veg Penne Arrabiata Pasta", price: "₹465" },
      { name: "Non Veg Penne Alfredo Pasta", price: "₹415" },
      { name: "Veg Spaghetti Aglio E Olio", price: "₹405", veg: true },
      { name: "Veg Penne Arrabiata Pasta", price: "₹390", veg: true },
    ],
  },
  {
    name: "Garlic Breads",
    emoji: "🧄",
    items: [
      { name: "Plain Garlic", price: "₹145", veg: true },
      { name: "Cheese Garlic", price: "₹175", veg: true },
      { name: "Stuff Garlic", price: "₹205", veg: true },
    ],
  },
  {
    name: "Small Plates — Around The World",
    emoji: "🌍",
    items: [
      { name: "Non Veg Mini Mezze Platter", price: "₹445" },
      { name: "Veg Cheesy Corn Quesadilla", price: "₹455", veg: true },
      { name: "Veg Avocado Toast", price: "₹405", veg: true },
      { name: "Veg Mini Mezze Platter", price: "₹370", veg: true },
    ],
  },
  {
    name: "Hot Asian Sizzlers",
    emoji: "🔥",
    items: [
      { name: "Chicken Sizzler", price: "₹575" },
      { name: "Mushroom Sizzler", price: "₹530", veg: true },
    ],
  },
  {
    name: "Naan Slider",
    emoji: "🫓",
    items: [
      { name: "Veg Slider", price: "₹270", veg: true },
      { name: "Non Veg Slider", price: "₹285" },
    ],
  },
  {
    name: "Sides",
    emoji: "🍟",
    items: [
      { name: "Cheese Garlic Bread", price: "₹330", veg: true },
      { name: "Stuffed Garlic Bread", price: "₹360", veg: true },
      { name: "Peri Peri Fries", price: "₹240", veg: true },
      { name: "Salted Fries", price: "₹215", veg: true },
      { name: "Cheesy Fries", price: "₹290", veg: true },
      { name: "Mushroom Cap", price: "₹370", veg: true },
    ],
  },
  {
    name: "Veg Snacks",
    emoji: "🧆",
    items: [
      { name: "Pizza Pocket", price: "₹175", veg: true },
      { name: "Punjabi Samosa", price: "₹165", veg: true },
      { name: "Samosa Chaat", price: "₹185", veg: true },
      { name: "Spring Roll", price: "₹180", veg: true },
      { name: "French Fries", price: "₹145", veg: true },
      { name: "Mix Nuggets Platter", price: "₹185", veg: true },
    ],
  },
  {
    name: "Non-Veg Snacks",
    emoji: "🍗",
    items: [
      { name: "Chicken Strips", price: "₹195" },
      { name: "Chicken Seekh", price: "₹180" },
      { name: "Chicken Fries", price: "₹185" },
      { name: "Chicken Popcorns", price: "₹175" },
      { name: "Shami Kabab", price: "₹245" },
      { name: "Chicken Nuggets", price: "₹165" },
    ],
  },
  {
    name: "Special Thali",
    emoji: "🍽️",
    items: [
      { name: "Special Veg Thali", price: "₹235", veg: true },
      { name: "Special Non Veg Thali", price: "₹370" },
    ],
  },
  {
    name: "Dimsums",
    emoji: "🥟",
    items: [
      { name: "Exotic Veg Dumpling", price: "₹405", veg: true },
    ],
  },
  {
    name: "Desserts",
    emoji: "🍨",
    items: [
      { name: "Ice Cream Bowl", price: "₹105", veg: true },
      { name: "Brownie With Ice Cream", price: "₹230", veg: true },
      { name: "Gulab Jamun", price: "₹100", veg: true },
    ],
  },
  {
    name: "Beverages",
    emoji: "🥤",
    items: [
      { name: "Sweet & Sour Lemonade", price: "₹220", veg: true },
      { name: "Pineapple And Basil Mojito", price: "₹260", veg: true },
      { name: "Strawberry Mojito", price: "₹235", veg: true },
      { name: "Bartender Special", price: "₹260", veg: true },
      { name: "Charcoal Mojito", price: "₹245", veg: true },
      { name: "Virgin Mojito", price: "₹220", veg: true },
    ],
  },
  {
    name: "Mocktails",
    emoji: "🍹",
    items: [
      { name: "Strawberry Sapphire", price: "₹220", veg: true },
      { name: "Virgin Pina Colada", price: "₹260", veg: true },
      { name: "Coke Float", price: "₹235", veg: true },
      { name: "Coconut Bite", price: "₹235", veg: true },
      { name: "Virgin Guava Marry", price: "₹245", veg: true },
      { name: "Shirley Temple", price: "₹260", veg: true },
    ],
  },
  {
    name: "Shakes & Beverages",
    emoji: "🥛",
    items: [
      { name: "Jain Shikanji", price: "₹95", veg: true },
      { name: "Fresh Lime Soda (Sweet/Salty)", price: "₹105", veg: true },
      { name: "Ice Tea", price: "₹95", veg: true },
      { name: "Yoga Shake", price: "₹145", veg: true },
      { name: "Green Apple Mojito", price: "₹145", veg: true },
      { name: "Hide'n' Seek Shake", price: "₹125", veg: true },
    ],
  },
  {
    name: "World Mains",
    emoji: "🌎",
    items: [
      { name: "Grilled Fish In Lemon Butter Sauce", price: "₹605" },
    ],
  },
];

const MenuPage = () => {
  const [filter, setFilter] = useState<"all" | "veg" | "nonveg">("all");

  const filteredMenu = menu
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => {
        if (filter === "veg") return item.veg === true;
        if (filter === "nonveg") return !item.veg;
        return true;
      }),
    }))
    .filter((cat) => cat.items.length > 0);

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
            <p className="text-muted-foreground mt-2 mb-5">
              {filteredMenu.reduce((sum, c) => sum + c.items.length, 0)} items across {filteredMenu.length} categories
            </p>

            {/* Filter buttons */}
            <div className="flex gap-3">
              {[
                { key: "all" as const, label: "All" },
                { key: "veg" as const, label: "🟢 Veg" },
                { key: "nonveg" as const, label: "🔴 Non-Veg" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                    filter === f.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick nav */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {filteredMenu.map((cat) => (
              <a
                key={cat.name}
                href={`#${cat.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-xs font-medium text-muted-foreground hover:text-primary px-3 py-1.5 rounded-full border border-border hover:border-primary/40 transition-colors whitespace-nowrap"
              >
                {cat.emoji} {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="container mx-auto px-6 py-12 space-y-16">
        {filteredMenu.map((cat, catIdx) => (
          <motion.section
            key={cat.name}
            id={cat.name.replace(/\s+/g, "-").toLowerCase()}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIdx * 0.03 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">{cat.emoji}</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">{cat.name}</h2>
              <span className="text-xs text-muted-foreground bg-card px-2 py-1 rounded-full border border-border">
                {cat.items.length}
              </span>
              <div className="flex-1 h-px bg-border ml-4" />
            </div>

            <div className="grid gap-1">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-4 px-4 rounded-lg hover:bg-card transition-colors group"
                >
                  <div className="flex gap-3 items-center min-w-0">
                    <span
                      className={`w-3 h-3 rounded-sm border-2 shrink-0 ${
                        item.veg
                          ? "border-green-600"
                          : item.egg
                          ? "border-yellow-500"
                          : "border-red-500"
                      }`}
                    >
                      <span
                        className={`block w-1.5 h-1.5 rounded-full m-px ${
                          item.veg
                            ? "bg-green-600"
                            : item.egg
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                      />
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-primary font-semibold text-sm whitespace-nowrap">
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
          Prices may vary. Menu sourced from JustDial listing. For the latest menu, call us or order online.
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
      <WhatsAppButton />
    </div>
  );
};

export default MenuPage;
