import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import communityImage from "@/assets/community.jpg";

const stats = [
  { value: 2400, suffix: "+", label: "Farmers Trained" },
  { value: 85, suffix: "K", label: "Tons of Food Produced" },
  { value: 12000, suffix: "+", label: "Families Supported" },
  { value: 1240, suffix: "+", label: "Hectares Regenerated" },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
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
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={communityImage}
              alt="Kigutu community farmers harvesting crops together"
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Stats */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-primary mb-4"
            >
              Community Impact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display text-foreground text-4xl md:text-5xl mb-12"
            >
              Transforming lives through the <span className="text-gradient-gold">land</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="glass-card !p-6 !rounded-2xl"
                >
                  <div className="text-display text-3xl md:text-4xl text-primary mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="text-label text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
