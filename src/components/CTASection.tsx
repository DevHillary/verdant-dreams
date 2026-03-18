import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ctaImage from "@/assets/cta-landscape.jpg";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={ctaImage} alt="Burundi highlands at sunset" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-32 w-full">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card text-center"
          >
            <p className="text-label text-primary mb-4">Get Involved</p>
            <h2 className="text-display text-foreground text-3xl md:text-4xl mb-6">
              Grow with us
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Whether you're an agricultural partner, donor, or simply curious about sustainable
              farming in East Africa — we'd love to connect. Visit Kigutu, explore our programs,
              or support the future of food.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:brightness-110 hover:scale-105"
              >
                Explore Programs
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-glass-border text-foreground font-medium text-sm transition-all duration-300 hover:bg-glass-hover"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
