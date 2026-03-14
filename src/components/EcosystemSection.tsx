import { useRef, lazy, Suspense, Component, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const ParticleCanvas = lazy(() => import("@/components/ParticleCanvas"));

class CanvasErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

function ParticleFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-48 h-48">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
            style={{ background: "radial-gradient(ellipse at center, hsla(142,76%,36%,0.08) 0%, transparent 70%)" }}
          >
            <CanvasErrorBoundary fallback={<ParticleFallback />}>
              <Suspense fallback={<ParticleFallback />}>
                <ParticleCanvas />
              </Suspense>
            </CanvasErrorBoundary>
            <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{ border: "1px solid hsla(0,0%,100%,0.08)" }} />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-label text-primary mb-4"
            >
              Living Ecosystem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display text-foreground text-4xl md:text-5xl mb-8"
            >
              A symphony of <span className="text-gradient-primary">soil, sun & seed</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Every particle represents a living component of the Kigutu
              ecosystem — from mycorrhizal networks in the soil to pollinator pathways above the
              canopy. Move your mouse to feel the wind that shapes our landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              {["Crops & Vegetation", "Soil Microbiome", "Water Systems", "Pollinator Networks"].map((item, i) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: i % 2 === 0 ? "hsl(142, 76%, 36%)" : "hsl(45, 93%, 47%)",
                    }}
                  />
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
