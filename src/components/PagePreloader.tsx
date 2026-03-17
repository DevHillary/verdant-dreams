import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import heroFarm from "@/assets/hero-farm.jpg";
import farmLandscape from "@/assets/farm-landscape.jpg";
import leafy3 from "@/assets/leafy3.jpg";
import cabbages from "@/assets/cabbages.jpg";
import sustainability from "@/assets/sustainability.jpg";
import community from "@/assets/community.jpg";
import storyPlanting from "@/assets/story-planting.jpg";
import theland from "@/assets/theland.jpg";
import cabbage2 from "@/assets/cabbage2.jpg";
import cow2 from "@/assets/cow2.jpg";
import ctaLandscape from "@/assets/cta-landscape.jpg";
import enhancedImg from "@/assets/enhanced-IMG-20260314-WA0031.jpg";
import farmMap from "@/assets/farm-map.jpg";
import galleryCoffee from "@/assets/gallery-coffee.jpg";
import gallerySeedlings from "@/assets/gallery-seedlings.jpg";
import herbs from "@/assets/herbs.jpg";
import inyamboCattle from "@/assets/inyambo-cattle.jpg";
import legumes from "@/assets/legumes.jpg";
import onions from "@/assets/onions.jpg";
import sorgum from "@/assets/sorgum.jpg";

interface PagePreloaderProps {
  onComplete: () => void;
}

const PagePreloader = ({ onComplete }: PagePreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const galleryImages = [
    heroFarm,
    farmLandscape,
    leafy3,
    cabbages,
    sustainability,
    community,
    storyPlanting,
    theland,
    cabbage2,
    cow2,
    ctaLandscape,
    enhancedImg,
    farmMap,
    galleryCoffee,
    gallerySeedlings,
    herbs,
    inyamboCattle,
    legumes,
    onions,
    sorgum
  ];

  useEffect(() => {
    const duration = prefersReducedMotion ? 3000 : 5000;
    const timer = window.setTimeout(() => {
      setIsVisible(false);
      window.setTimeout(onComplete, 450);
    }, duration);

    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-background"
          aria-label="Loading Kigutu Farm"
        >
          {/* Mobile: Text Above, Desktop: Text Overlay */}
          <div className="absolute inset-0 overflow-hidden p-8 flex flex-col">
            {/* Loading Text - Top on Mobile, Overlay on Desktop */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 18 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-6 md:mb-8 lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mb-0 lg:z-10"
            >
              <h1 className="text-display text-foreground text-4xl leading-none md:text-6xl">
                <motion.span
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Welcome to
                </motion.span>
                <motion.span
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-2 block text-gradient-primary"
                >
                  Kigutu Farm
                </motion.span>
              </h1>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-8 h-px w-48 origin-center bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.95, duration: 0.5 }}
                className="mt-6 flex items-center justify-center gap-2"
              >
                {[0, 1, 2].map((dot) => (
                  <span
                    key={dot}
                    className="preloader-dot block h-2 w-2 rounded-full bg-primary"
                    style={{ animationDelay: `${dot * 0.18}s` }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Gallery - Below on Mobile, Background on Desktop */}
            <div className="flex-1 lg:absolute lg:inset-0 lg:overflow-hidden lg:p-8">
              <div className="h-full max-w-8xl mx-auto">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 lg:gap-8">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.03, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }}
                      className="relative group"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div 
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader;
