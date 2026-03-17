import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import pacifiquePhoto from "@/assets/facifique.webp";

const BookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-label text-primary mb-4"
          >
            Meet Our Farm Manager
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-display text-foreground text-4xl md:text-5xl mb-8"
          >
            Pacifique <span className="text-gradient-primary">Irankunda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-body text-muted-foreground text-center max-w-3xl mx-auto text-lg leading-relaxed mb-8"
          >
            Pacifique Irankunda was born in Burundi, a small country in East Africa bordered by Rwanda, Tanzania, and Congo. 
            He shares his story and the rich culture of his homeland in his book, offering readers a unique perspective on life in Burundi.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden glass-card">
              <img
                src={pacifiquePhoto}
                alt="Pacifique Irankunda - Farm Manager at Kigutu Farm"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="glass-card inline-block px-4 py-2 text-sm text-foreground font-medium">
                  🌱 Farm Manager
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="glass-card p-8 rounded-3xl md:col-span-2"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">Read His Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Discover Pacifique's journey and learn about the beautiful country of Burundi through his personal narrative. 
              His book provides insights into East African culture, traditions, and the resilience of its people.
            </p>
            <div className="space-y-4">
              <a
                href="https://share.google/1ufriLKptQKIVAoOH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Read the Book
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="glass-card p-8 rounded-3xl mt-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-4">Get in Touch</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Interested in learning more about Pacifique's work at Kigutu Farm or want to discuss his book? 
            Feel free to reach out directly.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href="tel:+14135370923" className="text-foreground font-medium hover:text-primary transition-colors">
                  +1 (413) 537-0923
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookSection;
