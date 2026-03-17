import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { siteNavigation } from "@/lib/site-navigation";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 top-0 z-40 h-16 transition-all duration-500 ${
        scrolled ? "glass-nav" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-6">
        <Link to="/" className="font-display text-xl tracking-tight text-foreground">
          Kigutu Farm<span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {siteNavigation.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.label}
                to={link.href}
                className={`nav-link text-sm transition-colors duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => {
            console.log('Mobile menu toggled, current state:', mobileOpen);
            setMobileOpen(!mobileOpen);
          }}
          className="relative z-[105] flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[1.5px] w-6 bg-foreground"
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {createPortal(
              <>
                {console.log('Mobile menu is open, rendering menu')}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/50 z-[130] md:hidden"
                  onClick={() => setMobileOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed top-16 right-0 bottom-0 left-0 z-[135] md:hidden overflow-y-auto"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--glass) / 0.12), hsl(var(--glass) / 0.08))',
                    backdropFilter: 'blur(24px)',
                    borderBottom: '1px solid hsl(var(--glass-border) / 0.2)',
                    boxShadow: '0 -4px 24px hsl(var(--background) / 0.1)'
                  }}
                >
                  <div className="flex flex-col gap-2 p-6 min-h-full">
                    {siteNavigation.map((link, index) => {
                      const isActive = location.pathname === link.href;

                      return (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                            to={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-3 px-4 rounded-lg text-lg transition-all duration-300 ${
                              isActive 
                                ? "text-foreground bg-primary/20 border-l-4 border-primary shadow-sm" 
                                : "text-muted-foreground hover:text-foreground hover:bg-background/60 hover:shadow-sm"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                    
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: siteNavigation.length * 0.1 }}
                      className="mt-8 pt-8 border-t border-glass-border"
                    >
                      <div className="text-sm text-muted-foreground px-4">
                        <p className="mb-2">Kigutu Farm</p>
                        <p className="text-xs">Nourishing communities through sustainable agriculture</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </>,
              document.body
            )}
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;