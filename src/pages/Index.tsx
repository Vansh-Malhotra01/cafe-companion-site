import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import CateringMarquee from "@/components/CateringMarquee";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PromoPopup from "@/components/PromoPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CateringMarquee />
      <MenuSection />
      <MarqueeBanner />
      <AboutSection />
      <GallerySection />
      <ReservationSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <PromoPopup />
    </div>
  );
};

export default Index;
