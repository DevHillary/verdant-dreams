import CTASection from "@/components/CTASection";
<<<<<<< HEAD
import CommunityProvisionSection from "@/components/CommunityProvisionSection";
import EcosystemSection from "@/components/EcosystemSection";
import FishingSection from "@/components/FishingSection";
=======
import EcosystemSection from "@/components/EcosystemSection";
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
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
<<<<<<< HEAD
      <FishingSection />
      <SustainabilitySection />
      <CommunityProvisionSection />
=======
      <SustainabilitySection />
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
      <ImpactSection />
      <GallerySection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;
