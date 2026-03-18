import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import sustainImage from "@/assets/sustainability.jpg";

const practices = [
  {
    title: "Agroecology",
    description: "Integrating ecological principles into each farming decision so planting, grazing, and harvesting support the wider landscape.",
  },
  {
    title: "Soil Regeneration",
    description: "Building fertility with composting, mulch systems, and low-disturbance cultivation that restores structure and long-term productivity.",
  },
  {
    title: "Biodiversity",
    description: "Combining staple crops, fruit trees, forage, and habitat corridors to strengthen pollination and natural pest balance.",
  },
  {
    title: "Climate Resilience",
    description: "Using water retention, mixed planting systems, and adaptive crop planning to reduce risk during dry or unpredictable seasons.",
  },
];

const stewardshipPoints = [
  "Organic inputs are prioritized to protect soil biology and food quality.",
  "Tree crops and perennial planting help stabilize slopes and retain moisture.",
  "Mixed production reduces dependence on a single harvest and improves resilience.",
  "Training on the farm turns daily practice into shared community knowledge.",
];

const outcomes = [
  {
    label: "Soil-first system",
    value: "Compost, ground cover, and rotation planning are treated as core infrastructure, not extras.",
  },
  {
    label: "Water-aware design",
    value: "Planting patterns and land care methods aim to slow runoff, hold moisture, and reduce stress in dry periods.",
  },
  {
    label: "Diverse food landscape",
    value: "A layered mix of plantations, vegetables, grains, and trees creates a more stable and nourishing farm ecosystem.",
  },
];

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sustainability" ref={ref} className="relative px-6 py-32 md:px-16 md:py-48">
      <div className="absolute inset-0 opacity-10">
        <img src={sustainImage} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="text-label mb-4 text-primary">Sustainable Practices</p>
          <h2 className="text-display mb-6 text-4xl text-foreground md:text-5xl">
            Farming in harmony with the <span className="text-gradient-primary">earth</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Sustainability at Kigutu Farm is not a single project. It shapes how the land is planted, how nutrients are returned to the soil,
            and how production grows without exhausting the ecosystem that supports it.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr] lg:items-start">
          <div className="grid gap-6 md:grid-cols-2">
            {practices.map((practice, i) => (
              <motion.article
                key={practice.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + i * 0.08,
                }}
                className="glass-card group cursor-default"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h3 className="mb-3 font-display text-xl text-foreground">{practice.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="glass-card"
          >
            <p className="text-label mb-4 text-primary">Land Stewardship</p>
            <h3 className="font-display mb-4 text-3xl text-foreground">How the farm protects long-term fertility</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              The farm is designed as a living system where productive land, tree cover, forage, and regenerative methods support each other across seasons.
            </p>
            <div className="space-y-4">
              {stewardshipPoints.map((point, index) => (
                <div key={point} className="flex gap-4 border-t border-glass-border pt-4 first:border-t-0 first:pt-0">
                  <span className="text-label min-w-8 text-primary">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.08 }}
              className="glass-card !rounded-[2rem] !p-6"
            >
              <p className="text-label mb-3 text-primary">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
