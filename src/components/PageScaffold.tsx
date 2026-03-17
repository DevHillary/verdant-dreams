import { motion } from "framer-motion";
import type { ReactNode } from "react";
import FooterSection from "@/components/FooterSection";
import Navigation from "@/components/Navigation";

interface PageScaffoldProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children: ReactNode;
}

const PageScaffold = ({ eyebrow, title, description, image, children }: PageScaffoldProps) => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-36">
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="atmospheric-overlay absolute inset-0" />
          <div className="fog-overlay absolute inset-0" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel max-w-4xl rounded-[2rem] px-6 py-10 md:px-10 md:py-14"
          >
            <p className="text-label mb-4 text-primary">{eyebrow}</p>
            <h1 className="text-display text-foreground text-4xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {children}
      <FooterSection />
    </main>
  );
};

export default PageScaffold;
