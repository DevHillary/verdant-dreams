import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import heroFarm from "@/assets/hero-farm.jpg";
import farmLandscape from "@/assets/farm-landscape.jpg";
import community from "@/assets/cow2.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import gallerySeedlings from "@/assets/gallery-seedlings.jpg";
import sustainability from "@/assets/sustainability.jpg";
import leafy2 from "@/assets/leafy2.jpg";
import leafy3 from "@/assets/leafy3.jpg";
import hearbs from "@/assets/herbs.jpg";
import sorgum from "@/assets/sorgum.jpg";

const images = [
  { src: heroFarm, alt: "Kigutu farmland at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: galleryCoffee, alt: "Coffee cherries ripening on the branch", span: "" },
  { src: gallerySeedlings, alt: "Seedling nursery rows", span: "" },
  { src: farmLandscape, alt: "Terraced farmland aerial view", span: "md:col-span-2" },
  { src: community, alt: "Community harvest celebration", span: "" },
  { src: sustainability, alt: "Biodiversity close-up with morning dew", span: "" },
  { src: leafy2, alt: "Leafy greens growing in the garden", span: "" },
  { src: leafy3, alt: "Fresh leafy vegetables", span: "" },
  { src: hearbs, alt: "Herbs from the kitchen garden", span: "" },
  { src: sorgum, alt: "Sorghum fields at Kigutu", span: "" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const isMobile = window.innerWidth < 768;
    const imagesPerSlide = isMobile ? 2 : 3;
    const visible = [];
    for (let i = 0; i < imagesPerSlide; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  return (
    <section id="gallery" ref={ref} className="relative py-16 md:py-24 px-6 md:px-16">
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
          className="text-display text-foreground text-4xl md:text-5xl mb-8 text-center"
        >
          Moments from <span className="text-gradient-primary">the field</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-body text-muted-foreground text-center max-w-3xl mx-auto mb-16"
        >
          As the largest provider of food essentials to nearby schools and hospitals, Kigutu Farm plays a vital role in community nourishment and education. Our daily harvests ensure fresh, nutritious meals reach those who need them most.
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              aria-label="Previous images"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative w-full max-w-6xl">
              <div className="flex gap-3 md:gap-6">
                {getVisibleImages().map((img, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05, zIndex: 10, transition: { duration: 0.3 } }}
                    className="relative rounded-2xl overflow-hidden cursor-pointer group aspect-[3/2] md:aspect-[4/3] flex-1 min-h-[200px] md:min-h-[250px]"
                    onClick={() => setSelected(images.indexOf(img))}
                  >
                    <motion.img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ scale: 1.1, filter: "brightness(1.1)", transition: { duration: 0.5 } }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 border border-glass-border rounded-2xl pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110"
              aria-label="Next images"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/20 hover:bg-muted-foreground/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

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
