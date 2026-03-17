import PageScaffold from "@/components/PageScaffold";
import EcosystemSection from "@/components/EcosystemSection";
import PlantingCatalogSection from "@/components/PlantingCatalogSection";
import farmLandscape from "@/assets/farm-landscape.jpg";

const EcosystemPage = () => {
  return (
    <PageScaffold
      eyebrow="Farm Ecosystem"
      title="The full ecosystem of Kigutu Farm"
      description="Explore the animated farm map and a filterable planting catalog that shows the depth of Kigutu’s food forest, staple fields, orchards, and market garden."
      image={farmLandscape}
    >
      <EcosystemSection />
      <PlantingCatalogSection />
    </PageScaffold>
  );
};

export default EcosystemPage;
