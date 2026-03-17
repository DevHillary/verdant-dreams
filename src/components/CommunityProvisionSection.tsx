import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityImage from "@/assets/school.png";

const CommunityProvisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="community-provision" ref={ref} className="relative py-16 md:py-24 px-6 md:px-16 bg-gradient-to-b from-background via-background/95 to-background">
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
            Community Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-display text-foreground text-4xl md:text-5xl mb-8"
          >
            Largest Food Provider for <span className="text-gradient-primary">Schools & Hospitals</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-body text-muted-foreground text-center max-w-4xl mx-auto mb-16 text-lg leading-relaxed"
          >
            Kigutu Farm stands as the cornerstone of community nourishment, providing essential food supplies to educational institutions and healthcare facilities throughout the region. Our daily deliveries ensure that students receive nutritious meals for optimal learning and patients have access to fresh, wholesome foods for recovery and wellness.
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
              src={communityImage}
              alt="Kigutu Farm community food distribution to local schools"
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="glass-card inline-block px-4 py-2 text-sm text-foreground font-medium">
                🍎 Daily Fresh Food Deliveries
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
              <h3 className="text-2xl font-semibold text-foreground mb-4">Education Through Nutrition</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that well-nourished children learn better. Our partnership with schools ensures students receive balanced meals, supporting cognitive development and academic performance.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Daily fresh produce deliveries to school cafeterias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Nutrition education programs for students</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Seasonal variety for balanced diets</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Healthcare Support</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our hospitals and clinics depend on fresh, nutritious foods for patient recovery and staff wellness. We provide reliable daily supplies of vegetables, fruits, and herbs.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Fresh produce for patient meals and therapeutic diets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Medicinal herbs for traditional healing practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Emergency food reserves for crisis situations</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityProvisionSection;
