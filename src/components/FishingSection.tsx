import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import lakeImage from "@/assets/lake1.png";

const FishingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fishing" ref={ref} className="relative py-16 md:py-24 px-6 md:px-16 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-label text-primary mb-4"
          >
            Lake Tanganyika Fishing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-display text-foreground text-4xl md:text-5xl mb-8"
          >
            Building Our Boat for <span className="text-gradient-primary">Sustainable Fishing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-body text-muted-foreground text-center max-w-4xl mx-auto mb-16 text-lg leading-relaxed"
          >
            We are currently constructing a traditional fishing boat to harvest the abundant resources of Lake Tanganyika. This initiative will provide fresh fish for our community, create sustainable livelihoods, and strengthen our connection to Africa's deepest lake.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src={lakeImage}
              alt="Lake Tanganyika - Africa's second deepest lake"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="glass-card inline-block px-4 py-2 text-sm text-foreground font-medium">
                🐟 Lake Tanganyika - Second Deepest Lake in Africa
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Traditional Boat Building</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our boat construction follows traditional East African methods, using locally sourced materials and time-honored techniques passed down through generations.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Handcrafted using sustainable timber from our forests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Designed for stability in Lake Tanganyika's waters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Capacity to support community fishing operations</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Sustainable Fishing Practices</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lake Tanganyika is home to over 350 fish species, many found nowhere else on Earth. We're committed to responsible fishing that preserves this incredible biodiversity.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fresh fish supply for schools and hospitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Economic opportunities for local fishermen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Conservation of endemic fish species</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FishingSection;
