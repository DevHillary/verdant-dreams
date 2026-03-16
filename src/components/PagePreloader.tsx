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
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-background"
          aria-label="Loading Kigutu Farm"
        >
          <motion.div
            initial={prefersReducedMotion ? { scale: 1, x: 0, y: 0 } : { scale: 1.04, x: -12, y: 12 }}
            animate={prefersReducedMotion ? { scale: 1, x: 0, y: 0 } : { scale: 1.14, x: 10, y: -10 }}
            transition={prefersReducedMotion ? undefined : { duration: 3.4, ease: "easeInOut" }}
            className="preloader-media absolute inset-0"
            style={{ backgroundImage: `url(${preloaderFarmBg})` }}
          />
          <div className="preloader-aura absolute inset-0" />
          <div className="preloader-grain absolute inset-0" />

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 18 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 px-6 text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-label mb-5 text-primary"
            >
              Kigutu Farm
            </motion.p>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PagePreloader;
