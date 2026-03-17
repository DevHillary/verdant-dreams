import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import preloaderFarmBg from "@/assets/preloader-farm-bg.jpg";

interface PagePreloaderProps {
  onComplete: () => void;
}

const PagePreloader = ({ onComplete }: PagePreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          {/* Background with optimized image */}
          <div className="absolute inset-0">
            <img
              src={preloaderFarmBg}
              alt="Kigutu Farm landscape"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
                Kigutu
                <span className="text-primary"> Farm</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Rooted in land, learning, and community
              </p>
            </motion.div>

            {/* Loading indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.1,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      repeatType: "reverse",
                      repeatDelay: 0.2,
                    }}
                    className="w-3 h-3 rounded-full bg-primary"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader;
