import CTASection from "@/components/CTASection";
import EcosystemSection from "@/components/EcosystemSection";
import FooterSection from "@/components/FooterSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import LivestockSection from "@/components/LivestockSection";
import Navigation from "@/components/Navigation";
import StorySection from "@/components/StorySection";
import SustainabilitySection from "@/components/SustainabilitySection";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <HeroSection />
      <StorySection />
      <EcosystemSection />
      <LivestockSection />
      <SustainabilitySection />
      <ImpactSection />
      <GallerySection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
