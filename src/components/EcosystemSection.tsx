import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import farmMap from "@/assets/farm-map.jpg";

const ecosystemPoints = [
  "Pineapples & Coffee Plantation",
  "Food Forest & Kitchen Garden",
  "Rice, Cassava & Maize Blocks",
  "Nursery Site & Fodder Zones",
];

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
<<<<<<< HEAD
    <section id="ecosystem" ref={ref} className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
=======
    <section id="ecosystem" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
>>>>>>> d3434ac688703c623a9865b0ac311f2dac12e938
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-3xl glass-card md:h-[520px]"
          >
            <div className="map-glow absolute inset-0" />
            <div className="absolute inset-0 z-10 bg-background/20" />
            <motion.img
              src={farmMap}
              alt="Illustrated map of Kigutu Farm showing the gardens and growing zones"
              className="farm-map-image relative z-20 h-full w-full object-contain object-center p-3 md:p-5"
              loading="lazy"
              animate={isInView ? { scale: [1, 1.015, 1], x: [0, 4, -3, 0], y: [0, -3, 2, 0] } : {}}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 z-30 bg-gradient-to-t from-background/35 via-transparent to-background/5" />
            <div className="map-grid absolute inset-0 z-30 opacity-40" />
            <div className="absolute left-5 top-5 z-30 glass-card !rounded-2xl !px-4 !py-3">
              <p className="text-label text-primary">Farm Map</p>
              <p className="text-sm text-foreground">Living gardens across Kigutu</p>
            </div>
            <motion.div
              animate={isInView ? { opacity: [0.25, 0.7, 0.25] } : {}}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 z-30 rounded-full border border-primary/30 bg-background/60 px-4 py-2 backdrop-blur-md"
            >
              <span className="text-label text-foreground">Growing zones</span>
            </motion.div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-primary mb-4"
            >
              Farm Map
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display text-foreground text-4xl md:text-5xl mb-8"
            >
              A living map of <span className="text-gradient-primary">Kigutu’s gardens</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              This animated map reveals how Kigutu Farm is organized across its productive landscape —
              connecting food forest, nursery, staple crop plots, and specialty gardens into one regenerative system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {ecosystemPoints.map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div className={i % 2 === 0 ? "map-point map-point-primary" : "map-point map-point-accent"} />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
