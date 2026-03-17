import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import inyamboCattle from "@/assets/enhanced-IMG-20260314-WA0031.jpg";

const highlights = [
  { title: "Inyambo Heritage", desc: "The sacred 'Cattle of Kings' — a living symbol of Burundian royal tradition, prized for their majestic long horns and gentle temperament." },
  { title: "Sustainable Grazing", desc: "Our Ankole cattle thrive on natural pastures, contributing to soil fertility through integrated crop-livestock farming systems." },
  { title: "Community Livelihood", desc: "Providing milk, organic fertilizer, and income — the Inyambo are central to food security and cultural pride at Kigutu." },
];

const LivestockSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="livestock" ref={ref} className="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden group"
          >
            <img
              src={inyamboCattle}
              alt="Majestic Inyambo cattle on Kigutu Farm hillside"
              className="w-full h-[400px] md:h-[540px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="glass-card inline-block px-4 py-2 text-sm text-foreground font-medium">
                🐄 Inyambo — The Cattle of Kings
              </span>
            </div>
            <div className="absolute inset-0 border border-[hsla(0,0%,100%,0.08)] rounded-3xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-primary mb-4"
            >
              Livestock
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display text-foreground text-4xl md:text-5xl mb-6"
            >
              The sacred <span className="text-gradient-primary">Inyambo</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              At Kigutu Farm, we raise the legendary Inyambo — also known as Ankole cattle in
              Uganda — revered across the Great Lakes region as the "Cattle of Kings." With their
              iconic sweeping horns and deep cultural significance, these majestic animals are both
              a heritage treasure and a cornerstone of our sustainable farming model.
            </motion.p>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="glass-card p-5 rounded-2xl hover:border-primary/30 transition-colors duration-300"
                >
                  <h3 className="text-foreground font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LivestockSection;
