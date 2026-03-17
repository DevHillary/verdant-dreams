import heroFarm from "@/assets/hero-farm.jpg";
import GallerySection from "@/components/GallerySection";
import PageScaffold from "@/components/PageScaffold";

const GalleryPage = () => {
  return (
    <PageScaffold
      eyebrow="Gallery"
      title="A visual archive from the field"
      description="Browse scenes from plantations, community harvests, nursery beds, and the wider landscape of Kigutu Farm."
      image={heroFarm}
    >
      <GallerySection />
    </PageScaffold>
  );
};

export default GalleryPage;
