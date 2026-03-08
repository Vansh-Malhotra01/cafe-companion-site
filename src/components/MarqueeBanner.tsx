const MarqueeBanner = () => {
  const text = "🚚 FREE Home Delivery within 3 km on orders above ₹599! 🎉";
  const repeated = Array(6).fill(text).join("   •   ");

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {repeated}
      </div>
    </div>
  );
};

export default MarqueeBanner;
