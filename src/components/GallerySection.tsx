import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import heroFarm from "@/assets/hero-farm.jpg";
import farmLandscape from "@/assets/farm-landscape.jpg";
import community from "@/assets/community.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import gallerySeedlings from "@/assets/gallery-seedlings.jpg";
import sustainability from "@/assets/sustainability.jpg";

const images = [
  { src: heroFarm, alt: "Kigutu farmland at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: galleryCoffee, alt: "Coffee cherries ripening on the branch", span: "" },
  { src: gallerySeedlings, alt: "Seedling nursery rows", span: "" },
  { src: farmLandscape, alt: "Terraced farmland aerial view", span: "md:col-span-2" },
  { src: community, alt: "Community harvest celebration", span: "" },
  { src: sustainability, alt: "Biodiversity close-up with morning dew", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-label text-primary mb-4 text-center"
        >
          Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-display text-foreground text-4xl md:text-5xl mb-16 text-center"
        >
          Moments from <span className="text-gradient-primary">the field</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.span}`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-glass-border rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-8"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 text-foreground text-2xl hover:text-primary transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
