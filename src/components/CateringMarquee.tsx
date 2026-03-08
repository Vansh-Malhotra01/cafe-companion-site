const CateringMarquee = () => {
  const text = "🍽️ We also provide Catering Services! Contact us for bulk orders & events 🎉";
  const repeated = Array(6).fill(text).join("   •   ");

  return (
    <div className="bg-accent text-accent-foreground py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        {repeated}
      </div>
    </div>
  );
};

export default CateringMarquee;
