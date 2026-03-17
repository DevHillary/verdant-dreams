import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTop;
