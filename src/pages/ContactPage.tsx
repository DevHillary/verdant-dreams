import ctaLandscape from "@/assets/cta-landscape.jpg";
import BookSection from "@/components/BookSection";
import CTASection from "@/components/CTASection";
import PageScaffold from "@/components/PageScaffold";

const ContactPage = () => {
  return (
    <PageScaffold
      eyebrow="Contact"
      title="Start a conversation with Kigutu Farm"
      description="Connect with the farm about visits, partnerships, learning programs, or support for regenerative agriculture in Burundi."
      image={ctaLandscape}
    >
      <BookSection />
      <CTASection />
    </PageScaffold>
  );
};

export default ContactPage;
