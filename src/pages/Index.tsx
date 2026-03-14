import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import EcosystemSection from "@/components/EcosystemSection";
import LivestockSection from "@/components/LivestockSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StorySection />
      <EcosystemSection />
      <SustainabilitySection />
      <ImpactSection />
      <GallerySection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
