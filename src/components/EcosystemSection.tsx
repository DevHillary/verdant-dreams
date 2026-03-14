import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useInView } from "framer-motion";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!ref.current) return;
    mouseRef.current.x += (pointer.x * 0.3 - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y * 0.3 - mouseRef.current.y) * 0.05;
    ref.current.rotation.x = clock.getElapsedTime() * 0.05 + mouseRef.current.y;
    ref.current.rotation.y = clock.getElapsedTime() * 0.08 + mouseRef.current.x;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#22c55e"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" ref={ref} className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
            style={{ background: "radial-gradient(ellipse at center, hsla(142,76%,36%,0.08) 0%, transparent 70%)" }}
          >
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <ParticleField />
              </Canvas>
            </Suspense>
            <div className="absolute inset-0 pointer-events-none border border-glass-border rounded-3xl" />
          </motion.div>

          {/* Text */}
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
              Every particle in our visualization represents a living component of the Kigutu
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
                      background: i % 2 === 0
                        ? "hsl(142, 76%, 36%)"
                        : "hsl(45, 93%, 47%)",
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
