import sustainabilityImage from "@/assets/sustainability.jpg";
import PageScaffold from "@/components/PageScaffold";
import SustainabilitySection from "@/components/SustainabilitySection";

const SustainabilityPage = () => {
  return (
    <PageScaffold
      eyebrow="Sustainability"
      title="Regenerative practices grounded in the land"
      description="From agroecology to biodiversity corridors, Kigutu Farm uses practical systems that restore the soil and build long-term resilience."
      image={sustainabilityImage}
    >
      <SustainabilitySection />
    </PageScaffold>
  );
};

export default SustainabilityPage;
