import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sustainImage from "@/assets/sustainability.jpg";

const practices = [
  {
    title: "Agroecology",
    description: "Integrating ecological principles into every farming decision, working with nature's rhythms rather than against them.",
  },
  {
    title: "Soil Regeneration",
    description: "Rebuilding soil health through composting, cover cropping, and zero-tillage methods that increase carbon sequestration.",
  },
  {
    title: "Biodiversity",
    description: "Maintaining over 40 crop varieties alongside native species corridors that support pollinators and natural pest control.",
  },
  {
    title: "Climate Resilience",
    description: "Developing drought-resistant varieties and water harvesting systems that protect yields against climate volatility.",
  },
];

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sustainability" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img src={sustainImage} alt="" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-label text-primary mb-4 text-center"
        >
          Sustainable Practices
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-display text-foreground text-4xl md:text-5xl mb-16 text-center max-w-2xl mx-auto"
        >
          Farming in harmony with the <span className="text-gradient-primary">earth</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {practices.map((practice, i) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 + i * 0.1,
              }}
              className="glass-card group cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{practice.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
