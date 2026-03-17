import communityImage from "@/assets/community.jpg";
import ImpactSection from "@/components/ImpactSection";
import PageScaffold from "@/components/PageScaffold";

const ImpactPage = () => {
  return (
    <PageScaffold
      eyebrow="Impact"
      title="Community change rooted in food and training"
      description="Kigutu Farm supports families, trains growers, and expands food security through practical regenerative agriculture."
      image={communityImage}
    >
      <ImpactSection />
    </PageScaffold>
  );
};

export default ImpactPage;
