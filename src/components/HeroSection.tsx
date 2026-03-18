import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
        delay: 0.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Lush green farmland of Kigutu in the Burundi highlands at golden hour"
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
        />
        <div className="atmospheric-overlay absolute inset-0" />
        <div className="fog-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-label text-primary mb-6"
          >
            Burundi, East Africa
          </motion.p>

          <h1 className="text-display text-foreground" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.05 }}>
            <span className="hero-line block">Kigutu</span>
            <span className="hero-line block text-gradient-primary">The Future</span>
            <span className="hero-line block">is Rooted.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-lg text-muted-foreground max-w-lg leading-relaxed"
          >
            Growing Food. Nourishing Communities. Sustaining the Future.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-label text-muted-foreground text-[10px]">Scroll</span>
          <div className="w-[1px] h-8 bg-muted-foreground/30 relative overflow-hidden">
            <div className="w-full h-3 bg-primary animate-scroll-indicator absolute top-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
