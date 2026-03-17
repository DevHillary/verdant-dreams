import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import communityImage from "@/assets/theland.jpg";

const stats = [
  { value: 2400, suffix: "+", label: "Farmers Trained" },
  { value: 85, suffix: "K", label: "Tons of Food Produced" },
  { value: 12000, suffix: "+", label: "Families Supported" },
  { value: 1240, suffix: "+", label: "Hectares Regenerated" },
];

const impactAreas = [
  {
    title: "Training that multiplies",
    description: "Hands-on learning helps growers apply practical techniques in soil care, crop diversity, and farm planning beyond Kigutu itself.",
  },
  {
    title: "Food security in action",
    description: "A diverse planting system supports everyday nutrition while reducing the vulnerability that comes from depending on a single crop.",
  },
  {
    title: "Restoration with livelihoods",
    description: "Environmental recovery and farm productivity move together, creating work, knowledge, and healthier land over time.",
  },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="relative overflow-hidden px-6 py-32 md:px-16 md:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 md:gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={communityImage}
              alt="Kigutu community farmers harvesting crops together"
              className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label mb-4 text-primary"
            >
              Community Impact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display mb-6 text-4xl text-foreground md:text-5xl"
            >
              Transforming lives through the <span className="text-gradient-gold">land</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              As the largest provider of food essentials to nearby schools and hospitals, Kigutu Farm connects production, training, and restoration so that harvests create value far beyond the field. The impact is measured not only in outputs,
              but in stronger households, better growing knowledge, and a healthier local food system.
            </motion.p>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.28 + i * 0.1 }}
                  className="glass-card !rounded-2xl !p-6"
                >
                  <div className="text-display mb-2 text-3xl text-primary md:text-4xl">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="text-label text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.45 }}
            className="glass-card"
          >
            <p className="text-label mb-4 text-primary">Why it matters</p>
            <h3 className="font-display mb-4 text-3xl text-foreground">Impact grows when knowledge stays local</h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              By combining demonstration plots, regenerative production, and practical farmer support, the farm becomes a working model people can see, learn from,
              and adapt to their own land. That makes impact more durable than a one-time intervention.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {impactAreas.map((area, i) => (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.08 }}
                className="glass-card !rounded-[2rem] !p-6"
              >
                <h3 className="mb-2 font-display text-2xl text-foreground">{area.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
