import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import storyImage from "@/assets/story-planting.jpg";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="story" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-primary mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display text-foreground text-4xl md:text-5xl mb-8"
            >
              Rooted in the soil of <span className="text-gradient-primary">Burundi</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Nestled in the highlands of Burundi, Kigutu Farm was born from a vision to transform
                how communities relate to the land. We practice regenerative agriculture that heals
                the soil, feeds families, and builds resilience against climate change.
              </p>
              <p>
                Our work extends beyond farming. We train the next generation of agricultural leaders,
                preserve indigenous seed varieties, and demonstrate that sustainable food systems
                can thrive in East Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex gap-12"
            >
              <div>
                <div className="text-display text-3xl text-primary">1,240+</div>
                <div className="text-label text-muted-foreground mt-1">Hectares Regenerated</div>
              </div>
              <div>
                <div className="text-display text-3xl text-accent">98%</div>
                <div className="text-label text-muted-foreground mt-1">Seed Viability</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden">
              <img
                src={storyImage}
                alt="Hands planting seedlings in rich Burundian soil"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card !p-6 !rounded-2xl">
              <p className="text-label text-primary mb-1">Est. 2008</p>
              <p className="text-sm text-foreground">Kigutu, Burundi</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
