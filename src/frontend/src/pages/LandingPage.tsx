import Navbar from "@/components/Navbar";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OfferSection from "@/components/sections/OfferSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <OfferSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
