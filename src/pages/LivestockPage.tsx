import inyamboCattle from "@/assets/inyambo-cattle.jpg";
import LivestockSection from "@/components/LivestockSection";
import PageScaffold from "@/components/PageScaffold";

const LivestockPage = () => {
  return (
    <PageScaffold
      eyebrow="Livestock"
      title="Inyambo cattle within the Kigutu system"
      description="See how heritage livestock, regenerative grazing, and cultural stewardship fit into the broader ecology of Kigutu Farm."
      image={inyamboCattle}
    >
      <LivestockSection />
    </PageScaffold>
  );
};

export default LivestockPage;
